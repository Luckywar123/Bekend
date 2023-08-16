const { sequelize } = require('./sequelize');

(async() => await sequelize.sync({force:true}))();