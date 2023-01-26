const { DataTypes } = require("sequelize");
const connection = require("./database")

const Questions = require("./Questions_model")

const Answer = connection.define("resposta", {
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Questions.hasMany(Answer);
Answer.belongsTo(Questions);



Answer.sync({ force: false }).then(() => {});
module.exports = Answer;
