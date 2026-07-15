#!/bin/bash
# validate-docs.sh
# Validates documentation is in sync with codebase

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DOCS="$ROOT/.jalenevansdotcom"
SRC="$ROOT/src"

echo "==================================="
echo "Documentation Validation"
echo "==================================="
echo ""

ERRORS=0
WARNINGS=0

pass() { echo -e "${GREEN}✓${NC} $1"; }
warn() { echo -e "${YELLOW}⚠${NC} $1"; ((WARNINGS++)); }
fail() { echo -e "${RED}✗${NC} $1"; ((ERRORS++)); }

# Check 1: Schema fields
echo "Checking schema fields..."
if grep -q "id: string" "$DOCS/models/project.md" && \
   grep -q "title: string" "$DOCS/models/project.md" && \
   grep -q "startDate: Date" "$DOCS/models/project.md" && \
   grep -q "contributors:" "$DOCS/models/project.md" && \
   grep -q "description: string" "$DOCS/models/project.md" && \
   grep -q "tools:" "$DOCS/models/project.md" && \
   grep -q "tags:" "$DOCS/models/project.md"; then
  pass "Schema fields match"
else
  fail "Schema fields don't match"
fi

# Check 2: Registered tools
echo ""
echo "Checking registered tools..."
CODE_TOOLS=$(grep -oP "case '(\w+)':" "$SRC/utils/toolIconFunctions.ts" | sed "s/case '//;s'://'" | sort)
DOC_TOOLS=$(grep -oP "^\| \`\K[^\`]*(?=\`)" "$DOCS/domains/project-portfolio.md" | sort)

if [ "$CODE_TOOLS" = "$DOC_TOOLS" ]; then
  pass "Registered tools match"
else
  fail "Registered tools don't match"
  echo "  Code: $CODE_TOOLS"
  echo "  Docs: $DOC_TOOLS"
fi

# Check 3: Routes
echo ""
echo "Checking routes..."
CODE_ROUTES=$(grep -oP "'(/[^']*)'" "$SRC/constants/routes.ts" | tr -d "'" | sort)

for route in "/" "/about" "/blog" "/project"; do
  if echo "$CODE_ROUTES" | grep -q "$route"; then
    pass "Route $route exists"
  else
    fail "Route $route missing"
  fi
done

# Check 4: External links
echo ""
echo "Checking external links..."
CODE_LINKS=$(grep -oP "https?://[^'\"]*" "$SRC/constants/links.ts" | sort)

if echo "$CODE_LINKS" | grep -q "jalenevans.substack.com"; then
  if grep -q "jalenevans.substack.com" "$DOCS/domains/contact-communication.md"; then
    pass "Substack link matches"
  else
    warn "Substack link may be outdated in docs"
  fi
fi

if echo "$CODE_LINKS" | grep -q "linkedin.com/in/je319"; then
  if grep -q "linkedin.com/in/je319" "$DOCS/domains/contact-communication.md"; then
    pass "LinkedIn link matches"
  else
    warn "LinkedIn link may be outdated in docs"
  fi
fi

if echo "$CODE_LINKS" | grep -q "github.com/JalenEvans"; then
  if grep -q "github.com/JalenEvans" "$DOCS/domains/contact-communication.md"; then
    pass "GitHub link matches"
  else
    warn "GitHub link may be outdated in docs"
  fi
fi

# Check 5: Project count
echo ""
echo "Checking project count..."
CODE_PROJECTS=$(ls -1 "$SRC/content/project/"*.mdx 2>/dev/null | wc -l)
DOC_PROJECTS=$(grep -c "| \`" "$DOCS/models/project.md" 2>/dev/null || echo "0")

if [ "$CODE_PROJECTS" -eq "$DOC_PROJECTS" ]; then
  pass "Project count matches ($CODE_PROJECTS)"
else
  warn "Project count mismatch: code=$CODE_PROJECTS, docs=$DOC_PROJECTS"
fi

# Summary
echo ""
echo "==================================="
echo "Summary"
echo "==================================="
echo ""

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
  echo -e "${GREEN}All checks passed!${NC}"
  exit 0
elif [ $ERRORS -eq 0 ]; then
  echo -e "${YELLOW}$WARNINGS warning(s) found${NC}"
  exit 0
else
  echo -e "${RED}$ERRORS error(s), $WARNINGS warning(s) found${NC}"
  exit 1
fi
