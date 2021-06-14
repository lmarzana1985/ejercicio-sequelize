'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userHasRol extends Model {
    static associate(models) {}
  }
  userHasRol.init(
    {
      userId: DataTypes.INTEGER,
      rolId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'userHasRol',
    }
  );
  return userHasRol;
};
