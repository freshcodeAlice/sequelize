const {ValidationError, UniqueConstraintError} = require('sequelize');


module.exports.basicErrorHandler = (err, req, res, next) => {

      if(err instanceof UniqueConstraintError) {
      return res.status(409).send(err);  
      }

    if(err instanceof ValidationError) {
     return res.status(400).send(err);
    }

    const status = err.status || 500;
  return  res.status(status).send({
      errors: [{ message: err.message || 'Server error' }]
    });
  }