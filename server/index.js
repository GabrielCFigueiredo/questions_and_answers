const express = require("express");
const cors = require("cors");
const connection = require("./database/database");
const questions = require("./database/Questions_model")

const app = express();

app.use(cors())
app.use(express.json());

connection.authenticate().then(() => {
    console.log('conexao com banco de dados');
}).catch((erro) => {
    console.log(erro);
})

app.get("/", (req,res) => {
    res.send("seja bem vindo")
})

app.post("/questions", (req,res) => {
    const title = req.body.title
    const description = req.body.description

    questions.create({
        title: title,
        description: description
    }).then(() => {
        res.redirect('/');
    })
})

app.listen(8080, () => console.log("app rodando"))