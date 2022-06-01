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

module.exports.addUserGroup = async (req, res, next) => {
  try {
    const {
      body: { userId },
      params: { groupId }
    } = req;
    const userInstance = await User.findByPk(userId);
    const groupInstance = await Group.findByPk(groupId);
    groupInstance.addUser(userInstance);

    const groupWithUsers = await Group.findAll({
      where: {
        id: groupId
      },
      include: [
        {
          model: User,
          through: {
            attributes: []
          }
        }
      ],
      attributes: {
        exclude: ['password']
      }
    });
  } catch (err) {
    next(err);
  }
};
