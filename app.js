const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());
app.use('/api', router);

app.use((err, req, res, next) => {
  //bad practice!
  res.status(500).send({
    errors: [{ message: err.message }]
  });
});

module.exports = app;

/*

Создать 5 моделей и миграции, всем прописать атрибуты


*/
