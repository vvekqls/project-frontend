FROM node:20.9.0

WORKDIR /app

COPY package.json* ./

RUN npm i --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

CMD npm run start