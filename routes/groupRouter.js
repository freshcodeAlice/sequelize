const { Router } = require('express');
const GroupController = require('../controllers/group.controller');

const groupRouter = Router();

groupRouter.post('/', GroupController.createUserGroup);
groupRouter.get('/:userId', GroupController.getUserGroups);
module.exports = groupRouter;
