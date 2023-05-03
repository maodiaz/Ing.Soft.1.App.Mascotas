import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home';
import Layout from './components/Layout';
import Detalle from './pages/Detalle';
import Mascotas from './pages/Mascotas';
import MiPerfil from './pages/MiPerfil';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'mascota/detalle',
        element: <Detalle /> 
      },
      {
        path: 'mascotas',
        element: <Mascotas/>
      },
      {
        path: 'perfil',
        element: <MiPerfil/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
