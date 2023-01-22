const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json());

app.get("/", (req,res) => {
    res.send("seja bem vindo")
})

app.post("/register", (req,res) => {
    const titulo = req.body.titulo
    const descricao = req.body.descricao

    console.log(titulo);
})

app.listen(8080, () => console.log("app rodando"))