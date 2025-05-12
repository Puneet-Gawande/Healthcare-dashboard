
require('dotenv').config();
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.POSTGRES_URI, {
  dialect: 'postgres',
  logging: false,
});

const connectPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL Connected');
  } catch (error) {
    console.error('PostgreSQL Connection Failed', error);
  }
};

module.exports = { sequelize, connectPostgres };
