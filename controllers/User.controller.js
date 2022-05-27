const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const createdUser = await User.create(body);
    res.status(201).send({ data: createdUser });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const arrayUsers = await User.findAll();
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
    const returnedUser = await User.findByPK(id);
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
    const updatedUser = await User.update(body, {
      where: {
        id: id
      }
    });
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
