FROM node as builder

WORKDIR /tmp/workdir

COPY package.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm install

COPY src src
COPY .angular-cli.json tsconfig.json ./

RUN npm run-script build

# nginx server

FROM nginx:1.13.3-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /tmp/workdir/build /usr/share/nginx/html
