const { Router } = require('express');
const UserController = require('./controllers/User.controller');

const router = Router();

router.post('/user', UserController.createUser);

module.exports = router;
