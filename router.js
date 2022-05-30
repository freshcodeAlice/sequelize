const { Router } = require('express');
const UserController = require('./controllers/User.controller');
const TaskController = require('./controllers/task.controller');
const { checkUser } = require('./mw/user.mw');

const router = Router();

router.post('/user', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/user/:id', UserController.getUser);
router.delete('/user/:id', UserController.deleteUser);
router.put('/user/:id', checkUser, UserController.updateUserInstance);

router.post('/user/:id/task', checkUser, TaskController.createTask);
router.get('/user/:id/tasks', checkUser, TaskController.getUserTasks);

module.exports = router;
