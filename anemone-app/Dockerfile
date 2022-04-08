# This Dockerfile builds and deploys a production ready version of your ReactJS App.
# This could be automated using GitHub Actions to build the project and deliver it to Docker Hub.

# pull official base image
FROM node:17.8.0-alpine3.14 as build


# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./
RUN npm run build

# this next stage is the final deliverable. It is just a simple
# apache2 server with our built application (build/) being served on port 80.
# production stage
FROM httpd:2.4-alpine as production-stage
COPY --from=build /app/build /usr/local/apache2/htdocs/
EXPOSE 80