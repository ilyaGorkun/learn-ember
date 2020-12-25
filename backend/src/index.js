const express = require('express');
const routes = require('./routes');
const app = express();


app.use('/api', routes);

app.listen(3000, () => {
    console.log('Server listening on 3000 port');
})