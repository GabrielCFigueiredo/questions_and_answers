import { Button, Container } from "react-bootstrap";

export default function Questions(params) {
  return (
    <div>
      <Container>
        <form class="d-grid gap-3">
          <div>
            <h1>Faça sua pergunta</h1>
          </div>
          <div>
            <input placeholder="Titulo" className="form-control" />
          </div>
          <label>Descrição</label>
          <div className="form-floating">
            <textarea
              placeholder="descrição da pergunta"
              className="form-control"
              style={{height: 300}}
            >
            </textarea>
          </div>
          <div>
            <Button variant="primary">Perguntar</Button>{" "}
          </div>
        </form>
      </Container>
    </div>
  );
}
