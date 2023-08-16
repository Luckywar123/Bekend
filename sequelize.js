
const {Sequelize} = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL);

// Test koneksi
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Connection failed:', error);
  });

// Import and initialize User model
const User = require('./models/User')(sequelize);
const Product = require('./models/Product')(sequelize);
const Sku = require('./models/Sku')(sequelize);
const History = require('./models/History')(sequelize); // Import the History model
const Kasir = require('./models/Kasir')(sequelize);
const ReturnItem = require('./models/ReturnItem')(sequelize);


// Set up associations
Product.hasMany(Sku, { foreignKey: 'idBarang', as: 'skus' });
Sku.belongsTo(Product, { foreignKey: 'idBarang', as: 'product' });
Kasir.belongsTo(Sku, { foreignKey: 'idSKU' });
History.belongsTo(Product, { foreignKey: 'idBarang', as: 'product' });
History.belongsTo(Sku, { foreignKey: 'idSKU', as: 'sku' });
History.belongsTo(Kasir, { foreignKey: 'idTransaksi', as: 'kasir' });

module.exports =  { sequelize, Sequelize, User, Product, Sku, History, Kasir, ReturnItem };