FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
COPY *.babelrc ./

RUN npm install

COPY src ./src

RUN npm run build

RUN rm -rf ./src

EXPOSE 3000

CMD ["npm","run","prod"]