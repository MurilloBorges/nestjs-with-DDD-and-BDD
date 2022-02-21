FROM node:16.13.0-alpine

WORKDIR /usr/src/app

ADD ./shared ./shared

WORKDIR /usr/src/app/shared

RUN npm install

WORKDIR /usr/src/app

ADD ./wishlist ./wishlist

WORKDIR /usr/src/app/wishlist

RUN npm install

RUN npm run build

# EXPOSE ${PORT}

EXPOSE 3000

CMD ["node", "dist/wishlist/src/main"]
