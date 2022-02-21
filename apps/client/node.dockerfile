FROM node:16.13.0-alpine

WORKDIR /usr/src/app

ADD ./shared ./shared

ADD ./client ./client

WORKDIR /usr/src/app/client

RUN npm install

RUN npm run build

# EXPOSE ${PORT}

EXPOSE 3000

CMD ["node", "dist/client/src/main"]
