import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function List(params) {
  const [listQuestions, setListQuestions] = useState();

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


  return (
    <Container className="d-grid gap-3">
      <h1>Lista de Perguntas</h1>
      <Link to={"/questions"}>
        <Button variant="primary">Perguntar</Button>
      </Link>
      {listQuestions?.map((list) => {
        return (
          <Card key={list.id}>
            <div className="card-body">
              <p>Titulo: {list?.title}</p>
            </div>
            <div className="card-body">
              <p>Descrição: {list?.description}</p>
            </div>
            <div className="card-footer">
              <Link to={`/questions/${list?.id}`}>
                <Button variant="primary">Responder</Button>
              </Link>
            </div>
          </Card>
        );
      })}
    </Container>
  );
}
