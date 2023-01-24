import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function QuestionsId() {
  const [listId, setListId] = useState();
  const [value, setValue] = useState();

  const { id } = useParams();
  console.log(id);

  const handleChangeValues = (value) => {
    setValue((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,

    }));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/questions/${id}`)
      .then((res) => {
        setListId(res.data);
      })
      .catch((error) => {
        console.log(error.res);
      });
  }, [id]);

  const handleClickButton = async ()  => {
    const resposta = await axios.post("http://localhost:8080/answer", {
        body: value.body,
        answer: value.answer
        
    }).then((res) => {
        console.log(res);
    }).catch((error) => {
        console.log(error.request);
    })
    console.log("ddddd",resposta);
  };
  return (
    <div>
      <Container className="p-4" >
        <Card>
          <p>{listId?.description}</p>
        </Card>
        <form class="d-grid gap-3">
          <label>Resposta:</label>
          <div className="form-floating">
            <textarea
              placeholder="descrição da pergunta"
              className="form-control"
              style={{ height: 300 }}
              name="body"
              onChange={handleChangeValues}
            ></textarea>
            <div>
              <input
                type={"text"}
                className="form-control"
                name="answer"
                value={listId?.id}
                onChange={handleChangeValues}
              />
            </div>
          </div>
          <Button onClick={() => handleClickButton()} variant="primary">
            Voltar
          </Button>{" "}
        </form>
      </Container>
    </div>
  );
}
