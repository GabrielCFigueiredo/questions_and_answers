import React from "react";
import { Navbar } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./components/List/List";
import Questions from "./components/Questions/questions";
import QuestionsId from "./components/QuestionsId/questionsId";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <List />,
    },
    {
      path: "/questions",
      element: <Questions />,
    },
    {
      path: "/questions/:id",
      element: <QuestionsId />,
    },
  ]);
  return (
    <div className=" min-vh-100" style={{backgroundColor: '#ebebde'}}>
      <Navbar className="px-4" style={{backgroundColor: '#4f4747'}}>
        <Navbar className="text-white" href="#home">
          Perguntar.com
        </Navbar>
      </Navbar>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
