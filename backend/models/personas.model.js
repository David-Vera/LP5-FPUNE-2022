
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/bd.service');


  const Personas =  sequelize.define('personas', {
      per_codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement : true,
        primaryKey: true
      },
      per_nombre: {
        type: DataTypes.STRING,
        allowNull: true
      },
      per_correo: {
        type: DataTypes.STRING,
        allowNull: true
      },
      per_direccion: {
        type: DataTypes.STRING,
        allowNull: true
      },
      per_telefono: {
        type: DataTypes.STRING,
        allowNull: true
      },
      per_latitud: {
        type: DataTypes.STRING,
        allowNull: true
      },
      per_longitud: {
        type: DataTypes.STRING,
        allowNull: true
      },
      per_password: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      tableName: 'personas',
      timestamps: false
    });
  
    module.exports = {Personas};
  