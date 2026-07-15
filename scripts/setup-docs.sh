#!/bin/bash
# setup-docs.sh
# One-time setup for documentation tooling

set -e

echo "Setting up documentation tooling..."

chmod +x scripts/validate-docs.sh
echo "✓ Made validate-docs.sh executable"

chmod +x scripts/update-docs.sh
echo "✓ Made update-docs.sh executable"

echo ""
echo "Setup complete!"
echo ""
echo "Usage:"
echo "  ./scripts/validate-docs.sh    # Validate docs match code"
echo "  ./scripts/update-docs.sh      # Get update guidance"
