'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NBA extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NBA.init({
    team: {
      type: DataTypes.STRING,
      validate: {isAlphanumeric: true}
    },
    conference: {
      type: DataTypes.STRING,
      validate: {isAlpha: true}
    },
    article: {
      type: DataTypes.STRING,
      validate: {isAlphanumeric: true}
    },
    record: DataTypes.STRING,
    pointPerGame: {
      type: DataTypes.INTEGER,
      validate: {isInt: true}
    },
    reboundsPerGame: {
      type: DataTypes.INTEGER,
      validate: {isInt: true}
    },
    assistsPerGame: {
      type: DataTypes.INTEGER,
      validate: {isInt: true}
    }
  }, {
    sequelize,
    modelName: 'NBA',
  });
  return NBA;
};