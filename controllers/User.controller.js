const { User } = require('../models');
const createError = require('http-errors');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    console.log(body);
    const createdUser = await User.create(body);
    if (!createdUser) {
      const err = createError(400, 'Bad request!');
      return next(err);
    }
    res.status(201).send({ data: createdUser });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const { pagination = {} } = req;
    const arrayUsers = await User.findAll({
      attributes: {
        exclude: ['password']
      },
      ...pagination
    });
    res.status(200).send({ data: arrayUsers });
  } catch (error) {
    next(error);
  }
};

module.exports.getUser = async (req, res, next) => {
  const {
    params: { id }
  } = req;
  try {
    const returnedUser = await User.findByPk(id);

    if (!returnedUser) {
      const err = createError(404, 'User not found!');
      return next(err); // RETURN REQUIRED!!
    }
    res.status(200).send({ data: returnedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  const {
    body,
    params: { id }
  } = req;
  try {
    const [rowCount, updatedUser] = await User.update(body, {
      where: {
        id: id
      },
      returning: ['id', 'first_name', 'last_name']
    });
    // updatedUser.password = undefined;

    res.status(200).send({ data: updatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUserInstance = async (req, res, next) => {
  const { body, userInstance: user } = req;
  try {
    const updatedUser = await user.update(body);

    res.status(200).send({ data: updatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  const {
    params: { id }
  } = req;
  try {
    const deletedUser = await User.destroy({
      where: {
        id: id
      }
    });
    res.status(200).send(deletedUser);
  } catch (error) {
    next(error);
  }
};
