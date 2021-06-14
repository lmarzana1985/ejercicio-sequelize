'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    static associate(models) {
      Shipping.hasOne(models.Order);
    }
  }
  Shipping.init(
    {
      country: DataTypes.STRING,
      city: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Shipping',
    }
  );
  return Shipping;
};
