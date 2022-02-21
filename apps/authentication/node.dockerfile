FROM node:16.13.0-alpine

WORKDIR /usr/src/app

ADD ./shared ./shared

ADD ./authentication ./authentication

WORKDIR /usr/src/app/authentication

RUN npm install

RUN npm run build

# EXPOSE ${PORT}

EXPOSE 3000

CMD ["node", "dist/authentication/src/main"]
