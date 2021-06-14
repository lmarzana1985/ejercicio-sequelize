'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderDetail extends Model {
    static associate(models) {
      orderDetail.belongsTo(models.Product);
      orderDetail.belongsTo(models.Order);
    }
  }
  orderDetail.init(
    {
      quantity: DataTypes.INTEGER,
      subtotal: DataTypes.DOUBLE,
      productId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'orderDetail',
    }
  );
  return orderDetail;
};
