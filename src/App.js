import { Navbar } from "react-bootstrap";
import Questions from "./components/Questions/questions";

function App() {
  return (
    <div>
      <Navbar className="px-4" bg="dark" >
          <Navbar className="text-white" href="#home">Perguntar.com</Navbar>
      </Navbar>
      <Questions />
    </div>
  );
}

export default App;
