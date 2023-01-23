import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import List from './components/List/List';
import { Navbar } from 'react-bootstrap';
import Questions from './components/Questions/questions';

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar className="px-4" bg="dark" >
          <Navbar className="text-white" href="#home">Perguntar.com</Navbar>
    </Navbar>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
