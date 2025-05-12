const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgres');

const Billing = sequelize.define('Billing', {
  patientName: DataTypes.STRING,
  amount: DataTypes.FLOAT,
  status: DataTypes.STRING,
  paidAt: DataTypes.DATE
}, { timestamps: true });

module.exports = Billing;
