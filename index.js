require('dotenv').config();
const bodyParser = require('body-parser');

const PORT = 3000;
const express = require('express');
const server = express();
server.use(bodyParser.json());

server.use((req, res, next) => {

    const morgan = require('morgan');
    server.use(morgan('dev'));

    console.log("<____Body Logger START____>");
    console.log(req.body);
    console.log("<_____Body Logger END_____>");
  
    next();
});

const apiRouter = require('./api');
server.use('/api', apiRouter);

const {client} = require('./db');
client.connect();

server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
});