const mongoose = require('mongoose');

const MONGO_USERNAME = 'test';
const MONGO_PASSWORD = 'test';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'learn-ember';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const url = 'mongodb://127.0.0.1:27017/usersdb';

mongoose.connect(url, options).then(() => {
    console.log('MongoDB is connected');
}).catch((err) => {
    console.log(err);
});