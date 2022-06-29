const { Router } = require('express');
const GroupController = require('../controllers/group.controller');
const multer = require('multer');
const {STATIC_PATH} = require('../config');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, STATIC_PATH);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.${file.originalname}`);
  }
});

const upload = multer({ storage });

const groupRouter = Router();

groupRouter.post('/', GroupController.createUserGroup);
groupRouter.post(
  '/:groupId/image',
  upload.single('image'),
  GroupController.createImage
);
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
