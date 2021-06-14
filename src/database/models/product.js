'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Brand);
      Product.belongsTo(models.Category);
      Product.belongsTo(models.Size);
      Product.belongsTo(models.Gender);
      Product.hasMany(models.Image, { foreignKey: 'productId', as: 'images' });
      Product.hasOne(models.orderDetail);
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      stock: DataTypes.INTEGER,
      stockMin: DataTypes.INTEGER,
      stockMax: DataTypes.INTEGER,
      brandId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      sizeId: DataTypes.INTEGER,
      genderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
