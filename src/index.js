import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';                          
import Home from './pages/home';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Sardines from './pages/sardines';
import Soda from './pages/soda';
import Chips from './pages/chips';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  {
    path: "sardines",
element: <Sardines/>
  },
  {
    path: "chips",
element: <Chips/>
  },
  {
    path: "soda",
element: <Soda/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
