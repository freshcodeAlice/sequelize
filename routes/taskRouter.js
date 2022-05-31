const { Router } = require('express');
const TaskController = require('../controllers/task.controller');
const { checkUser } = require('../mw/user.mw');
const pagination = require('../mw/pagination.mw');

const taskRouter = Router();
taskRouter.post('/:id', checkUser, TaskController.createTask);
taskRouter.get('/:id', pagination, checkUser, TaskController.getUserTasks);

module.exports = taskRouter;
