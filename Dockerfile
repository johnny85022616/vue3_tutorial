# FROM node 
# RUN mkdir -p /app
# COPY package*.json /app
# WORKDIR /app
# RUN npm install && npm cache clean --force
# COPY . /app
# CMD [ "npm" , "run" , "build" ]

FROM nginx:alpine
COPY dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/


