const { Group, User } = require('../models');
const _ = require('lodash');

module.exports.createUserGroup = async (req, res, next) => {
  try {
    const { body } = req;
    const filtr = _.pick(body, ['name', 'imagePath', 'description']);
    const group = await Group.create({ ...filtr, userId: body.userId });
    const user = await User.findByPk(body.userId, {
      attributes: {
        exclude: ['password']
      }
    });
    await group.addUser(user);
    res.status(201).send({ data: group });
  } catch (err) {
    next(err);
  }
};

module.exports.getUserGroups = async (req, res, next) => {
  try {
    const {
      params: { userId }
    } = req;
    const userGroups = await User.findByPk(body.userId, {
      include: [Group]
    });

    if (!userGroups) {
      throw new Error('Empty user');
    }
  } catch (err) {
    next(err);
  }
};
