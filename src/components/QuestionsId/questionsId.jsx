import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, redirect, useParams } from "react-router-dom";

export default function QuestionsId() {
  const [listId, setListId] = useState();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/questions/${id}`)
      .then((res) => {
        setListId(res.data);
      })
      .catch((error) => {
        console.log(error.res);
      });
  }, []);
  
  return (
    <Container className='p-4'>
      <Card className="d-grid gap-3">
        <div>
          <h2>{listId?.title}</h2>
        </div>
        <div className="card-body">
          <p>{listId?.description}</p>
        </div>
        <div className="card-footer">
          <Link to={`/`}>
            <Button variant="primary">Voltar as Perguntas</Button>
          </Link>
        </div>
      </Card>
    </Container>
  );
}
