const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('card', 'postgres', 'fghhdfgh#$$', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});


const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection successfully Card System');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

testConnection();

const db = {
      Sequelize,
      sequelize
}
  module.exports = db;