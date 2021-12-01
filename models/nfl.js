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
    team: DataTypes.STRING,
    division: DataTypes.STRING,
    article: DataTypes.STRING,
    record: DataTypes.STRING,
    passingYards: DataTypes.INTEGER,
    rushingYards: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NFL',
  });
  return NFL;
};