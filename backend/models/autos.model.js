const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/bd.service');


const Autos =  sequelize.define('autos', {
      aut_codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement : true,
        primaryKey: true
      },
      aut_persona_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      aut_descripcion: {
        type: DataTypes.STRING,
        allowNull: true
      },
      aut_marca: {
        type: DataTypes.STRING,
        allowNull: true
      },
      aut_ano: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      aut_kilometraje: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      aut_costo_alquiler: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      aut_latitud: {
        type: DataTypes.STRING,
        allowNull: true
      },
      aut_longitud: {
        type: DataTypes.STRING,
        allowNull: true
      },
      aut_estado: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      tableName: 'autos',
      timestamps: false
    });

  

  module.exports = {Autos};
  