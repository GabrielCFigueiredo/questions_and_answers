const Sequelize = require("sequelize");
const connection = require("./database");


const Answer = connection.define('resposta', {
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    answerId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Answer.sync({force: false}).then(() =>{})
module.exports = Answer