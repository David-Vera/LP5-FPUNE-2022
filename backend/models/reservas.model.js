const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/bd.service');


const Reservas =  sequelize.define('reservas', {
      res_codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement : true,
        primaryKey: true
      },
      res_auto: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      res_persona: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      res_auto_persona: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      res_monto_pagar: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      res_fecha: {
        type: DataTypes.DATE,
        allowNull: true
      },
      res_estado: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      tableName: 'reservas',
      timestamps: false
    });

    module.exports = {Reservas};
  
  