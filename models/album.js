'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Album.belongsTo(models.Artist, {foreignKey: 'artistId'});
      models.Album.hasMany(models.Song, {foreignKey: 'albumId'});
    }
  };
  Album.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER,
    artwork: DataTypes.STRING,
    tracks: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};