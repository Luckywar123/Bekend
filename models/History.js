const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('History', {
    idHistory: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idReturn: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idTransaksi: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idBarang: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idSKU: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    jenis_transaksi: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, {
    tableName: 'history',
    timestamps: false,
  });
};
