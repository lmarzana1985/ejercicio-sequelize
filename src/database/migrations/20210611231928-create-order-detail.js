'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      subtotal: {
        type: Sequelize.DOUBLE,
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orderDetails');
  },
};
