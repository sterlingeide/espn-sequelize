'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlaylistsSongs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PlaylistsSongs.init({
    songId: DataTypes.INTEGER,
    playlistsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlaylistsSongs',
  });
  return PlaylistsSongs;
};