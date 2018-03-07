'use strict';

const http = require('http');
const path = require('path');

const express = require('express');
const open = require('open');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../webpack.config.js');
const complier = webpack(config);

const env = process.env;
const port = env.port || 8080;

const app = express();

app.use(express.static('dist'));

app.use(webpackDevMiddleware(complier, config.devServer));
app.use(webpackHotMiddleware(complier));

app.all('*', function(req, res, next) {
  next();
});

const server = http.createServer(app);

server.listen(port);

server.on('listening', function() {
  console.log(`Listening at ${port}`);
  open(`http://localhost:${port}`);
});
