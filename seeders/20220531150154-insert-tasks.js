'use strict';
const {User} = require('../models');
const _ = require('lodash');

const generateTasks = () => {
  const users = await User.findAll({
    attributes: ['id']
  });

  const tasks = users.map((u, i) => {
   return new Array(_.random(1, 10, false)).fill(null).map((t, i) => ({
      user_id: u.id,
      body: `Textbody${i}`,
      created_at:new Date(),
      updated_at: new Date()
   }));
  });

  return tasks
}

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('tasks', generateTasks());



  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
