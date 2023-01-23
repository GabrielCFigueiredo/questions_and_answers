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
  }, []);
  console.log(listQuestions);
  return (
    <Container className="d-grid gap-3">
      <h1>Lista de Perguntas</h1>
      <Link to={"/questions"}>
        <Button variant="primary">Perguntar</Button>
      </Link>
      {listQuestions?.map((list) => {
        return (
          <Card>
            <div className="card-body">
              <p>{list.description}</p>
            </div>
            <div className="card-footer">
                <Button variant="primary">Responder</Button>
            </div>
          </Card>
        );
      })}
    </Container>
  );
}
