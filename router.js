const { Router } = require('express');
const UserController = require('./controllers/User.controller');

const router = Router();

router.post('/user', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/user/:id', UserController.getUser);
router.delete('/user/:id', UserController.deleteUser);
router.put('/user/:id', UserController.updateUser);

module.exports = router;
