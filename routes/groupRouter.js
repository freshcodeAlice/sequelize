const { Router } = require('express');
const GroupController = require('../controllers/group.controller');

const groupRouter = Router();

groupRouter.post('/', GroupController.createUserGroup);
groupRouter.get('/:userId', GroupController.getUserGroups);
groupRouter.put('/:groupId', GroupController.addUserGroup);

module.exports = groupRouter;

/*
Написать маршрут и контроллер для добавления 
юзера в группу

1) Принимаем id юзера и группы 
(юзера в req.body, groupId - в req.params)
2) Найти юзера
3) Найти группу
4) *****Make magic********
5) Добавляем юзера в группу
6) Возвращаем группу со всеми юзерами в ответ



*/
