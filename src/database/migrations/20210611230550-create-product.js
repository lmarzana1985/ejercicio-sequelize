'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DOUBLE,
      },
      stock: {
        type: Sequelize.INTEGER,
      },
      stockMin: {
        type: Sequelize.INTEGER,
      },
      stockMax: {
        type: Sequelize.INTEGER,
      },
      brandId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Brands',
          key: 'id',
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
      sizeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sizes',
          key: 'id',
        },
      },
      genderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Genders',
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
    await queryInterface.dropTable('Products');
  },
};
