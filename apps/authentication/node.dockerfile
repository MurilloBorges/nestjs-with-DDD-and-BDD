FROM node:16.13.0-alpine

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./ tsconfig*.json ./

RUN npm install

COPY . .

RUN rm -rf dist

RUN npm run build

COPY --chown=node:node . .

USER node

EXPOSE ${PORT}

WORKDIR /usr/src/app/dist/authentication/

CMD ["node", "src/main"]
