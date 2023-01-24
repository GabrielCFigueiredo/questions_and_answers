const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const connection = require("./database/database");
const questions = require("./database/Questions_model");
const answer = require("./database/Answer_model");

const app = express();

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

connection.authenticate().then(() => {
    console.log('conexao com banco de dados');
}).catch((erro) => {
    console.log(erro);
})

app.get("/", async (req,res) => {
   const q = await questions.findAll({raw: true, order: [
    ["id","DESC"]// DESC DECRESCENTE ASC CRESCENTE
   ]})
        res.status(200).send(q)
})


app.post("/questions", async (req,res) => {
    const title = req.body.title
    const description = req.body.description

    await questions.create({
        title: title,
        description: description
    }).then(() => {
        res.redirect('/');
        
    })
})

app.get("/questions/:id", async (req,res) => {
    const id = req.params.id;
    const ques = await questions.findOne({
        where: {id: id}
    })
    res.send(ques)
})

app.post("/answer", async (req,res) => {
    const body = req.body.body
    const answerId = req.body.answer

    await answer.create({
        body: body,
        answerId: answerId
    }).then(() => {
        res.redirect('/');
        
    })
})

app.listen(8080, () => console.log("app rodando"))