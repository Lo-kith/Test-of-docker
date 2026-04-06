# --- Stage 1: Build the Frontend ---
FROM node:18-alpine AS builder 
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# --- Stage 2: Run the Backend ---
FROM node:18-alpine 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY server.js ./

# This line must match the "AS builder" from Stage 1
COPY --from=builder /app/frontend/dist ./dist

EXPOSE 3000
CMD ["node", "server.js"]