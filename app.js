const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());
app.use('/api', router);

module.exports = app;

/*

Создать 5 моделей и миграции, всем прописать атрибуты


*/
