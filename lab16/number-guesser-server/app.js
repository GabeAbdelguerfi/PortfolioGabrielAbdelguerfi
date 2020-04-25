const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const routes = require('./routes/game.routes');
const app = express();

function localhostHandler(request, response, next){
    response.header('Access-Control-Allow-Origin', '*');
    next();
}

app.use(localhostHandler);
app.use('/api/game', routes);
app.use( bodyParser.json() );
app.use( bodyParser.json());
app.listen(port);

console.log(`Server is running on port ${port}...`);