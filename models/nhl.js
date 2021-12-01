'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NHL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NHL.init({
    team: {
      type: DataTypes.STRING,
      validate: {isAlphanumeric: true}
    },
    conference: {
      type: DataTypes.STRING,
      validate: {isAlpha: true}
    },
    record: DataTypes.STRING,
    article: {
      type: DataTypes.STRING,
      validate: {isAlphanumeric: true}
    },
    goalsForPerGame: {
      type: DataTypes.INTEGER,
      validate: {isInt: true}
    },
    goalsAgainstPerGame: {
      type: DataTypes.INTEGER,
      validate: {isInt: true}
    }
  }, {
    sequelize,
    modelName: 'NHL',
  });
  return NHL;
};