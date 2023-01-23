
import axios from "axios";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Questions(params) {

    const  [values,setValues] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue => ({
            ...prevValue,
            [value.target.name] : value.target.value,
        })))
    }

    const handleClickButton = () => {
        axios.post("http://localhost:8080/questions", {
            title: values.title,
            description: values.description
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
            <input placeholder="Titulo" className="form-control" name="title" onChange={handleChangeValues} />
          </div>
          <label>Descrição</label>
          <div className="form-floating">
            <textarea
              placeholder="descrição da pergunta"
              className="form-control"
              style={{height: 300}}
              name="description"
              onChange={handleChangeValues}
            >
            </textarea>
          </div>
          <Link to={'/'}>
            <Button onClick={() => handleClickButton()} variant="primary">Perguntar</Button>{" "}
          </Link>
        </form>
      </Container>
    </div>
  );
}
