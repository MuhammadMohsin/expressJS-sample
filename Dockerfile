FROM node:7.7.2-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]
EXPOSE 8080

