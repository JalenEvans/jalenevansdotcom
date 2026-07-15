#!/bin/bash
# update-docs.sh
# Helper to update documentation after code changes

set -e

TARGET=${1:-help}

case $TARGET in
  schema)
    echo "Schema update detected."
    echo "Please update:"
    echo "  - .jalenevansdotcom/models/project.md"
    echo "  - .jalenevansdotcom/domains/content-management.md"
    ;;
  
  tools)
    echo "Tool update detected."
    echo "Please update:"
    echo "  - .jalenevansdotcom/domains/project-portfolio.md"
    echo "  - .jalenevansdotcom/models/logo-data.md"
    ;;
  
  routes)
    echo "Route update detected."
    echo "Please update:"
    echo "  - .jalenevansdotcom/domains/navigation-routing.md"
    ;;
  
  links)
    echo "External link update detected."
    echo "Please update:"
    echo "  - .jalenevansdotcom/domains/contact-communication.md"
    echo "  - .jalenevansdotcom/domains/blog.md (if Substack)"
    ;;
  
  help|*)
    echo "Documentation Update Helper"
    echo ""
    echo "Usage: ./scripts/update-docs.sh [target]"
    echo ""
    echo "Targets:"
    echo "  schema   - After changing content.config.ts"
    echo "  tools    - After adding/removing tools in toolIconFunctions.ts"
    echo "  routes   - After changing routes.ts"
    echo "  links    - After changing links.ts"
    ;;
esac
