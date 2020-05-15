# demo:latest
FROM node:latest

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

CMD ["node", "index.js"]