'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NHLs', {
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
      record: {
        type: Sequelize.STRING
      },
      article: {
        type: Sequelize.STRING
      },
      goalsForPerGame: {
        type: Sequelize.INTEGER
      },
      goalsAgainstPerGame: {
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
    await queryInterface.dropTable('NHLs');
  }
};