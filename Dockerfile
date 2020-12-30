FROM node:10-slim

WORKDIR /app/ui

COPY package*.json ./

RUN npm install -g @vue/cli-service

RUN npm ci \
 && npm cache clean --force \
 && mv /app/ui/node_modules /node_modules

EXPOSE 8080

CMD ["npm", "run", "serve"]
