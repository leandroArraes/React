import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter,RouterProvider,Navigate } from "react-router-dom";

import Home from './Routes/Home.jsx'
import Contato from './Routes/Contato.jsx'
import Empresa from './Routes/Empresa.jsx'
import Props from './Routes/Props.jsx';
import List from './Funcionalidades/05 - List/List.jsx';
import Evento from './Funcionalidades/06 - Eventos/Evento.jsx';
import Forms from './Funcionalidades/07 - Form/Forms.jsx';
import Condicional from './Funcionalidades/08 - Condicional/Condicional.jsx';
import Listrender from './Routes/listRender.jsx';
import StateLift from './Routes/StateLift.jsx';
import ErrorPage from './Routes/ErrorPage.jsx';
import { ContactDatails } from './Routes/ContactDatails.jsx';
import { Useeffect } from './Routes/Useeffect.jsx';

const Router = createBrowserRouter([
  {
    path: "/", 
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "home", element:<Home/>
      },
      {
        path: "contato", element:<Contato/>
      },
      {
        path: "empresa", element:<Empresa/>
      },
      {
        path: "props", element:<Props/>
      },
      {
        path: "list", element:<List/>
      },
      {
        path: "evento", element:<Evento/>
      },
      {
        path: "Form", element:<Forms/>
      },
      {
        path: "condicional", element:<Condicional/>
      },
      {
        path: "listrender", element:<Listrender/>
      },
      {
        path: "statelift", element:<StateLift/>
      },

      // Rotas Aninhadas - nested routes - identificador unico - dynamic routes
      // esse tipo geralmente recebe o id no final do path 
      // os dois pontos indicam um estado dinamico , no caso o id 
      {
        path: "/contato/:id", element:<ContactDatails />
      },
      
      // Navigate para paginas inexistentes ou quando ela deixa de existir 
      // pode ser para links antigos etc...
      {
        path: "/oldcontact",
        element:<Navigate to="/contato"/>
      },
      {
        path: "/ueffect",
        element:<Useeffect/>
      }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={Router} />
  </React.StrictMode>,
)
