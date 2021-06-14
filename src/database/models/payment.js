'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.hasOne(models.Order);
    }
  }
  Payment.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Payment',
    }
  );
  return Payment;
};
