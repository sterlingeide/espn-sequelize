'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NBAs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team: {
        type: Sequelize.STRING
      },
      conference: {
        type: Sequelize.STRING
      },
      article: {
        type: Sequelize.STRING
      },
      record: {
        type: Sequelize.STRING
      },
      pointPerGame: {
        type: Sequelize.INTEGER
      },
      reboundsPerGame: {
        type: Sequelize.INTEGER
      },
      assistsPerGame: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('NBAs');
  }
};