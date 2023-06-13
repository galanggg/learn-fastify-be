FROM node:alpine

WORKDIR "/src"

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .env ./.env

CMD [ "npm", "run", "start-prod" ]
