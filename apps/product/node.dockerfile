FROM node:16.13.0-alpine

WORKDIR /usr/src/app

ADD ./shared ./shared

ADD ./produtct ./produtct

WORKDIR /usr/src/app/produtct

RUN npm install

RUN npm run build

# EXPOSE ${PORT}

EXPOSE 3000

CMD ["node", "dist/produtct/src/main"]
