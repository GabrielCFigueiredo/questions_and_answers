const Sequelize  = require("sequelize");
const dbConfig  = require("../database/config/config")


const connection = new Sequelize(dbConfig.MYSQL_ADDON_DB, dbConfig.MYSQL_ADDON_USER, dbConfig.MYSQL_ADDON_PASSWORD, {
    host: dbConfig.MYSQL_ADDON_HOST,
    dialect: dbConfig.DIALECT,
    
});

module.exports = connection;