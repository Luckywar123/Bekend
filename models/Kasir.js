// models/Kasir.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Kasir', {
    idTransaksi: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idSKU: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
  }, {
    tableName: 'kasir',
    timestamps: false,
  });
 };
