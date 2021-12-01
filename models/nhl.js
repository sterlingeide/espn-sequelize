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
    team: DataTypes.STRING,
    conference: DataTypes.STRING,
    record: DataTypes.STRING,
    article: DataTypes.STRING,
    goalsForPerGame: DataTypes.INTEGER,
    goalsAgainstPerGame: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NHL',
  });
  return NHL;
};