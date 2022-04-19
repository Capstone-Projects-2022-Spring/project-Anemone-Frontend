# This Dockerfile builds and deploys a production ready version of your ReactJS App.
# This could be automated using GitHub Actions to build the project and deliver it to Docker Hub.

# pull official base image
FROM node:17.8.0-alpine3.14 as build


# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./anemone-app/package.json ./
COPY ./anemone-app/package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY ./anemone-app ./
RUN npm run build

# this next stage is the final deliverable. It is just a simple
# nginx server with our built application (build/) being served on port 80.
# production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
