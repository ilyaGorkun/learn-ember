const mongoose = require('mongoose');

const MONGO_USERNAME = 'test';
const MONGO_PASSWORD = 'test';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'learn-ember';
const options = {
  useNewUrlParser: true,
};
const url = 'mongodb://mongodb:27017/pg';

mongoose
  .connect(url, options)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.log(err);
  });
