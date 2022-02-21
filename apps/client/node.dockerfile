FROM node:16.13.0-alpine

WORKDIR /usr/src/app

ADD ./shared ./shared

WORKDIR /usr/src/app/shared

RUN npm install

WORKDIR /usr/src/app

ADD ./client ./client

WORKDIR /usr/src/app/client

RUN npm install

RUN npm run build

# EXPOSE ${PORT}

EXPOSE 3000

CMD ["node", "dist/client/src/main"]
