FROM node:16.13.0-alpine

WORKDIR /usr/src/app

ADD ./shared ./shared

ADD ./wishlist ./wishlist

WORKDIR /usr/src/app/wishlist

RUN npm install

RUN npm run build

# EXPOSE ${PORT}

EXPOSE 3000

CMD ["node", "dist/wishlist/src/main"]
