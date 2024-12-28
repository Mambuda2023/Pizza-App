FROM node:alpine as build
WORKDIR /opt/app
COPY *.json ./
RUN npm install
COPY . . 
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /dist /usr/share/nginx/html
COPY --from=build nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]