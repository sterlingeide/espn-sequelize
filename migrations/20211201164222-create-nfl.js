'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NFLs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team: {
        type: Sequelize.STRING
      },
      division: {
        type: Sequelize.STRING
      },
      article: {
        type: Sequelize.STRING
      },
      record: {
        type: Sequelize.STRING
      },
      passingYards: {
        type: Sequelize.INTEGER
      },
      rushingYards: {
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
    await queryInterface.dropTable('NFLs');
  }
};