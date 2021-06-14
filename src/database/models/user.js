'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Rol, { as: 'roles', through: 'usersHasRoles' });
      User.belongsTo(models.Address);
      User.hasMany(models.Order, { foreignKey: 'userId', as: 'orders' });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      addressId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
