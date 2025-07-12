FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
WORKDIR /app/.medusa/server
RUN npm install
CMD ["npm", "run", "start"]
