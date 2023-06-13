FROM node:alpine

WORKDIR "/src"

COPY ./package.json ./

COPY .env ./.env


RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start-prod" ]
