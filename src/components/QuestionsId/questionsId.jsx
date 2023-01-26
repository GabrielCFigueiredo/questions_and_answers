import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function QuestionsId() {
  const [listId, setListId] = useState();
  const [idList, setIdList] = useState();
  const [values, setValues] = useState();
  const [list, setList] = useState();

  useEffect(() => {
    if (listId) {
      setIdList(listId.id);
    }
  }, [listId]);

  const { id } = useParams();
  console.log(id);

  const handleBody = (e) => {
    setValues(e.target.value)
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8080/questions/${id}`)
      .then((res) => {
        setListId(res.data);
        setList(res.data.resposta)
        console.log("dd",res.data);
        console.log("resposta",res.data.resposta);
      })
      .catch((error) => {
        console.log(error.res);
      });
  }, [id]);

  const handleClickButton = () => {
   axios.post("http://localhost:8080/answer", {
    body: values,
    perguntumId: idList
   }).then((res) => {
    console.log(res);
   }).catch((error) => {
    console.log(error);
   })
}

console.log("teste", list);
 
  return (
    <div>
      <Container className="p-4">
        <Card>
          <p>{listId?.description}</p>
        </Card>
        <form className="d-grid gap-3">
          <label>Resposta:</label>
          <div className="form-floating">
            <textarea
              placeholder="descrição da pergunta"
              className="form-control"
              style={{ height: 300 }}
              name="body"
              onChange={handleBody}
            ></textarea>
          </div>
          <div>
            <input type="hidden" name="perguntumId" value={listId?.id} />
          </div>
          <Button onClick={() => handleClickButton()} variant="primary">
            Voltar
          </Button>{" "}
        </form>
        {
          list?.map((lt) => {
            return (
            <div>
              {lt.body}
            </div>
            )
          })
        }
        
      </Container>
    </div>
  );
}
