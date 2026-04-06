FROM node:18-alpine AS builder 

WORKDIR /app

COPY frontend/ ./

RUN if [ -d "vite-project" ]; then cd vite-project && npm install && npm run build && mv dist /app/dist; \
    else npm install && npm run build; fi

FROM node:18-alpine 
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY server.js ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "server.js"]