import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function QuestionsId() {
  const [listId, setListId] = useState();
  const [idList, setIdList] = useState();
  const [lista, setLista] = useState();
  const [createAnswer, setCreateAnswer] = useState();

  const [values, setValues] = useState();
  

  useEffect(() => {
    if (listId) {
      setIdList(listId.id);
    }
  }, [listId]);

  const { id } = useParams();

  const handleBody = (e) => {
    setValues(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/questions/${id}`)
      .then((res) => {
        setListId(res.data);
        setLista(res.data.resposta);
      })
      .catch((error) => {
        console.log(error.res);
      });
  }, [id, setLista]);

  const handleClickButton = () => {
    axios
      .post("http://localhost:8080/answer", {
        body: values,
        perguntumId: idList,
      })
      .then((res) => {
        setCreateAnswer(res)

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Container className="p-4 d-grid gap-3 ">
        <Card>
          <Card.Body className="rounded">
            <Card.Title className="fw-bolder">
              Titulo: {listId?.title}
            </Card.Title>
            <Card.Text className="fw-normal">
              Descrição: {listId?.description}
            </Card.Text>
          </Card.Body>
        </Card>

        <form className="d-grid gap-3">
          <label>Resposta:</label>
          <div className="form-floating">
            <textarea
              placeholder="descrição da pergunta"
              className="form-control"
              style={{ height: 200 }}
              name="body"
              onChange={handleBody}
            ></textarea>
          </div>
          <div>
            <input type="hidden" name="perguntumId" value={listId?.id} />
          </div>
          <Link to={"/"}>
            <Button
              onClick={() => handleClickButton()}
              className="border border-white"
              style={{ backgroundColor: "#777764" }}
            >
              Voltar para as Perguntas
            </Button>
          </Link>
        </form>
      </Container>
    </div>
  );
}
