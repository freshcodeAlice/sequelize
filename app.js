const express = require('express');
const router = require('./routes');
const { STATIC_PATH } = require('./config');
const cors = require('cors');
const errorHandler = require('./errorHadlser');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(STATIC_PATH));
app.use('/api', router);

app.use(errorHandler.basicErrorHandler);

module.exports = app;
