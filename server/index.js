const express = require("express");
const cors = require("cors");
const connection = require("./database/database");

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

app.post("/register", (req,res) => {
    const titulo = req.body.titulo
    const descricao = req.body.descricao

    console.log(titulo);
})

app.listen(8080, () => console.log("app rodando"))