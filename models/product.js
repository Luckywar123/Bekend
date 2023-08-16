const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Product', {
    idBarang: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    indicator: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'products',
    timestamps: false,
  });
};
