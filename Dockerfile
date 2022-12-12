# Stage 1
FROM node:16.15.1 as build-stage
WORKDIR /frontend
COPY package*.json .
RUN npm install
COPY . .

# ARG REACT_APP_BASE_URL
ENV REACT_APP_BASE_URL=$REACT_APP_BASE_URL

EXPOSE 3000

#Alterar ao usar o NGINX
CMD ["npm", "run", "start"]

# # Stage 2
# FROM nginx:1.17.0-alpine

# COPY --from=build-stage /frontend/build /usr/share/nginx/html
# EXPOSE 80

# CMD nginx -g 'daemon off;'