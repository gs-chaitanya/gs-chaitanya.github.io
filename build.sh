#!/usr/bin/env bash
set -e
echo "Building Hugo site..."
hugo --cleanDestinationDir --minify
echo "Syncing build artifacts to root for GitHub Pages..."
cp -r public/* .
cp public/.nojekyll .
echo "Build complete. Ready to preview or commit."
