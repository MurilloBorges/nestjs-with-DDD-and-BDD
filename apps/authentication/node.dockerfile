FROM node:16.13.0-alpine

WORKDIR /usr/src/app

ADD ./shared ./shared

WORKDIR /usr/src/app/shared

RUN npm install

WORKDIR /usr/src/app

ADD ./authentication ./authentication

WORKDIR /usr/src/app/authentication

RUN npm install

RUN npm run build

# EXPOSE ${PORT}

EXPOSE 3000

CMD ["node", "dist/authentication/src/main"]
