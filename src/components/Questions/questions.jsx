
import axios from "axios";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";

export default function Questions(params) {

    const  [values,setValues] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue => ({
            ...prevValue,
            [value.target.name] : value.target.value,
        })))
    }

    const handleClickButton = () => {
        axios.post("http://localhost:8080/register", {
            titulo: values.titulo,
            descricao: values.descricao
        }).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }
  return (
    <div>
      <Container>
        <form class="d-grid gap-3">
          <div>
            <h1>Faça sua pergunta</h1>
          </div>
          <div>
            <input placeholder="Titulo" className="form-control" name="titulo" onChange={handleChangeValues} />
          </div>
          <label>Descrição</label>
          <div className="form-floating">
            <textarea
              placeholder="descrição da pergunta"
              className="form-control"
              style={{height: 300}}
              name="descricao"
              onChange={handleChangeValues}
            >
            </textarea>
          </div>
          <div>
            <Button onClick={() => handleClickButton()} variant="primary">Perguntar</Button>{" "}
          </div>
        </form>
      </Container>
    </div>
  );
}
