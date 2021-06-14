'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Payment);
      Order.belongsTo(models.User);
      Order.belongsTo(models.Shipping);
      Order.belongsTo(models.State);
      Order.hasMany(models.orderDetail, {
        foreignKey: 'orderId',
        as: 'orderDetails',
      });
    }
  }
  Order.init(
    {
      number: DataTypes.INTEGER,
      date: DataTypes.DATE,
      total: DataTypes.DOUBLE,
      paymentId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      shippingId: DataTypes.INTEGER,
      stateId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
