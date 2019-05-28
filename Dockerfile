FROM node as prod-build
COPY package.json ./
RUN yarn install
COPY . ./

# Stage 2 - the production environment
FROM nginx
COPY --from=prod-build . /usr/share/nginx/html
EXPOSE 8080
