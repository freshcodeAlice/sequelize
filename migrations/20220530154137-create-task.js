'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
            key: 'id'
          }
        }
      },
      body: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isDone: {
        field: 'is_done',
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      deadline: {
        type: Sequelize.DATE
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};