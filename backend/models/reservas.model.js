
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('reservas', {
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
      res_tiempo: {
        type: DataTypes.STRING,
        allowNull: true
      },
      res_monto_pagar: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      res_fecha: {
        type: DataTypes.DATE,
        allowNull: true
      }
    }, {
      tableName: 'reservas'
    });
  };
  