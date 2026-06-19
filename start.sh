#!/bin/bash

# Backend API — local 3000 = external 3000
PORT=3000 pnpm --filter @workspace/api-server run dev &
BACKEND_PID=$!

# Frontend — local 5000 = external 80 = webview/preview
PORT=5000 BASE_PATH=/ pnpm --filter @workspace/ashy-creations run dev &
FRONTEND_PID=$!

wait $BACKEND_PID $FRONTEND_PID
