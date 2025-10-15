#!/bin/bash
set -e

# Build the node
echo "Building node..."
pnpm build

# Create the custom folder structure with package.json
echo "Setting up custom folder..."
mkdir -p ~/.n8n-node-cli/.n8n/custom/node_modules
echo '{"name":"custom","private":true}' > ~/.n8n-node-cli/.n8n/custom/package.json

# Symlink our node
echo "Creating symlink..."
rm -rf ~/.n8n-node-cli/.n8n/custom/node_modules/n8n-nodes-blooio
ln -sf "$PWD" ~/.n8n-node-cli/.n8n/custom/node_modules/n8n-nodes-blooio

# Background process to keep recreating package.json if it gets deleted
(
  while true; do
    if [ ! -f ~/.n8n-node-cli/.n8n/custom/package.json ]; then
      echo '{"name":"custom","private":true}' > ~/.n8n-node-cli/.n8n/custom/package.json 2>/dev/null || true
    fi
    sleep 0.1
  done
) &
WATCHER_PID=$!

# Run n8n-node dev
echo "Starting n8n-node dev..."
n8n-node dev

# Kill the watcher when n8n-node dev exits
kill $WATCHER_PID 2>/dev/null || true


