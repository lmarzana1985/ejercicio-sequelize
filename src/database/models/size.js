'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    static associate(models) {
      Size.hasMany(models.Product, { foreignKey: 'sizeId', as: 'products' });
    }
  }
  Size.init(
    {
      height: DataTypes.FLOAT,
      width: DataTypes.FLOAT,
      weight: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Size',
    }
  );
  return Size;
};
