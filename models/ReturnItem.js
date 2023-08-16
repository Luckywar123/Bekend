const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('ReturnItems', {
    // Define your model attributes here
    idBarang: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idSKU: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    alasan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // ... other attributes ...
  }, {
    tableName: 'return_items',
    timestamps: false,
  });  
};

