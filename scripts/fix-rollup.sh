#!/bin/bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npx tsc --noEmit
npm run lint:fix