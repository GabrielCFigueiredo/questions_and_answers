const Sequelize = require("sequelize");

const connection = new Sequelize('questions','root','G@briel23', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;