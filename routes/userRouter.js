const { Router } = require('express');
const UserController = require('../controllers/User.controller');

const { checkUser } = require('../mw/user.mw');

const userRouter = Router();

userRouter.post('/', UserController.createUser);
userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:id', UserController.getUser);
userRouter.delete('/:id', UserController.deleteUser);
userRouter.put('/:id', checkUser, UserController.updateUserInstance);

module.exports = userRouter;
