FROM node:10.16.0-alpine
EXPOSE 3000

WORKDIR /usr/src
COPY package*.json ./

RUN npm install
COPY . /usr/src

CMD ["npm", "run", "start"]