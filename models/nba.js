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
    team: DataTypes.STRING,
    conference: DataTypes.STRING,
    article: DataTypes.STRING,
    record: DataTypes.STRING,
    pointPerGame: DataTypes.INTEGER,
    reboundsPerGame: DataTypes.INTEGER,
    assistsPerGame: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NBA',
  });
  return NBA;
};