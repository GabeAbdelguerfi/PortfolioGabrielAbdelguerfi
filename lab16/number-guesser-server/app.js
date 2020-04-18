const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const routes = require('./routes/game.routes');
const app = express();

app.use('/api/game', routes);
app.use( bodyParser.json() );
app.use( bodyParser.json());

app.use(localhostHandler);

function localhostHandler(request, response, next){
    response.header('Access-Control-Allow-Origin', '*');
}

app.listen(port);
console.log(`Server is running on port ${port}...`);