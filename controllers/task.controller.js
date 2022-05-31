const { Task } = require('../models');

module.exports.createTask = async (req, res, next) => {
  try {
    const { body, userInstance } = req;
    //    const task = await Task.create({ ...body, userId: id });
    const task = await userInstance.createTask({ ...body });
    res.status(201).send({ data: task });
  } catch (err) {
    next(err);
  }
};

module.exports.getUserTasks = async (req, res, next) => {
  try {
    const { userInstance, pagination } = req;

    const tasks = await userInstance.getTasks({
      ...pagination
    });
    res.send({ data: tasks });
  } catch (err) {
    next(err);
  }
};
