const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgres');

const Inventory = sequelize.define('Inventory', {
  itemName: DataTypes.STRING,
  quantity: DataTypes.INTEGER,
  expiryDate: DataTypes.DATE
}, { timestamps: true });

module.exports = Inventory;
