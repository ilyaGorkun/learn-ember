FROM node:10.16.0-alpine
EXPOSE 3000

WORKDIR /usr/src
COPY package*.json ./

RUN npm install
RUN npm install -g nodemon
COPY . /usr/src

CMD ["npm", "run", "dev"]