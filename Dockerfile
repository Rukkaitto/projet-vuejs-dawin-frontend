FROM node:10-slim

WORKDIR /app/ui

COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]
