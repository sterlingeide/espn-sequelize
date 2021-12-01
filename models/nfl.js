'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NFL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NFL.init({
    team: {
      type: DataTypes.STRING,
      validate: {isAlphanumeric: true}
    },
    division: {
      type: DataTypes.STRING,
      validate: {isAlpha: true}
    },
    article: {
      type: DataTypes.STRING,
      validate: {isAlphanumeric: true}
    },
    record: DataTypes.STRING,
    passingYards: {
      type: DataTypes.INTEGER,
      validate: {isInt: true}
    },
    rushingYards: {
      type: DataTypes.INTEGER,
      validate: {isInt: true}
    }
  }, {
    sequelize,
    modelName: 'NFL',
  });
  return NFL;
};