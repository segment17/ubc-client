 # FROM node:12.3.1-alpine
 # WORKDIR /usr/src/app
 # COPY package.json yarn.lock ./
 # RUN yarn install --prefer-offline --frozen-lockfile
 # COPY . .
 # RUN yarn build
 # RUN ls
 # ---
 # FROM nginx:stable
 # COPY build/ /usr/share/nginx/html
 # ---
 # STAGE 1 - build the react app  # set the base image to build from 
 # This is the application image from which all other subsequent 
 # applications run. Alpine Linux is a security-oriented, lightweight #(~5Mb) Linux distribution.
# FROM node:alpine as build

# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY ./package.json yarn.lock /app/
# RUN yarn --silent
# COPY . /app
# RUN yarn build

# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

FROM nginx:alpine
COPY /build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
