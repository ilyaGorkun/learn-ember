const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const db = require('./db/db');

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api', routes);

// app.listen(3000, () => {
//     console.log('Server listening on 3000 port');
// })