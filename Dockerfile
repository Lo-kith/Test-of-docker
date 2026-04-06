FROM alpine:latest
    WORKDIR /app/frontend
    COPY frontend/package*.json ./
    RUN npm install
    COPY frontend/ ./
    RUN npm run build
    

    FROM alpine:latest 

    WORKDIR /app
    COPY package*.json ./
    
   RUN npm install
   COPY server.js ./
   
    COPY --from=builder /app/frontend/dist ./dist
    EXPOSE 3000
    
    CMD ["npm","start"]