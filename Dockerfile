FROM node:alpine as build

COPY . .
RUN npm install
RUN npm run build


FROM nginx:stable-alpine
COPY --from=build /dist /usr/share/nginx/html
COPY --from=build nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5173
CMD ['nginx','-g','daemon off;']
