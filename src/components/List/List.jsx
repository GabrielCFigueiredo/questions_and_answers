import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function List() {
  const [listQuestions, setListQuestions] = useState();
  const [listAnswer, setListAnswer] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        setListQuestions(res.data);
      })
      .catch((error) => {
        console.log(error.res);
      });
  }, [listQuestions]);

  useEffect(() => {
    axios.get(`http://localhost:8080/answer`).then((res) => {
      setListAnswer(res.data);
    });
  }, [listAnswer]);
  return (
    <Container className="d-grid gap-3 p-4  ">
      <Alert variant="success">
        <Alert.Heading>Esta com duvida Faça sua Pergunta!</Alert.Heading>
        <p>
          Se você está com alguma duvida faça sua pergunta que nossa comunidade
          vai tentar te ajudar!!!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Link to={"/questions"}>
            <Button variant="success">Faça Sua Pergunta</Button>
          </Link>
        </div>
      </Alert>

      {listQuestions?.map((list, id) => {
        return (
          <Card key={id}>
            <Card.Header
              className="text-white"
              as="h5"
              style={{ backgroundColor: "#4f4747" }}
            >
              Pergunta
            </Card.Header>
            <Card.Body className="rounded">
              <Card.Title className="fw-bolder">
                Titulo: {list?.title}
              </Card.Title>
              <Card.Text className="fw-normal">
                Descrição: {list?.description}
              </Card.Text>
              <Link to={`/questions/${list?.id}`}>
                <Button
                  className="border border-white"
                  style={{ backgroundColor: "#777764" }}
                >
                  Responder
                </Button>
              </Link>
            </Card.Body>
            <Card>
              {listAnswer?.map((answer, id) => {
                if (answer.perguntumId === list.id) {
                  return (
                    <Card.Body key={id} style={{ backgroundColor: "#777764" }}>
                      <Card.Text className="text-white">
                        <p className="fw-bold">Resposta: {answer.body}</p> 
                      </Card.Text>
                      <hr className="text-white" />
                    </Card.Body>
                  );
                }
              })}
            </Card>
          </Card>
        );
      })}
    </Container>
  );
}
