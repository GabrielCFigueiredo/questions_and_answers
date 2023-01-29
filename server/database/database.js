const Sequelize  = require("sequelize");
const dbConfig  = require("../database/config/config")


const connection = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    
});

module.exports = connection;