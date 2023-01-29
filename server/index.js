const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./database/database");
const questions = require("./database/Questions_model");
const Answer = require("./database/Answer_model");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection
  .authenticate()
  .then(() => {
    console.log("conexao com banco de dados");
  })
  .catch((erro) => {
    console.log(erro);
  });

app.get("/", async (req, res) => {
  const q = await questions.findAll({
    raw: true,
    order: [
      ["id", "DESC"], // DESC DECRESCENTE ASC CRESCENTE
    ],
  });
  res.status(200).send(q);
});

app.post("/questions", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  await questions
    .create({
      title: title,
      description: description,
    })
    .then(() => {
      res.redirect("/");
    });
});

app.get("/questions/:id", async (req, res) => {
 try {
  const id = req.params.id;
  const ques = await questions.findOne({
    include: Answer,
    where: { id: id },
  });
  res.send(ques.get({plain: true}))
 } catch (error) {
console.log(error);
 }
});

app.post("/answer", async (req, res) => {
  const body = req.body.body;
  const perguntumId = req.body.perguntumId;
  await Answer.create({
    body: body,
    perguntumId: perguntumId
  })
    .then((res) => {
      res.status(200).send(res)
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/answer", async (req, res) => {
  try {
   const questao = await Answer.findAll({
     raw: true,
     order: [
      ["id", "DESC"], // DESC DECRESCENTE ASC CRESCENTE
    ],
   });
   res.status(200).send(questao)
  } catch (error) {
 console.log(error);
  }
 });

 app.delete("")

app.listen(8080, () => console.log("app rodando"));
