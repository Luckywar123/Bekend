const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Sku', {
    idSKU: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    skuCode: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    productionDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    expiredDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    inboundDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    stok: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idBarang: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'skus',
    timestamps: false,
  });
};
