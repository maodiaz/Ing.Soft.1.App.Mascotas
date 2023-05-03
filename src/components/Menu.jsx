import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="main-menu">
        <ul className="mt-5">
        	<li className="has-subnav">
                <Link to="/admin/perfil">
                    <i className="fas fa-user-circle fa-2x"></i>
                    <span className="nav-text">
                        Mi perfíl
                    </span>
                </Link>    
            </li>
			
            <li>
                <a href="inicio.html">
                    <i className="fas fa-home fa-2x"></i>
                    <span className="nav-text">
                       Inicio
                    </span>
                </a>
            </li>

            <li>
                <Link to="/admin/mascotas">
                    <i className="fas fa-dog fa-2x"></i>
                    <span className="nav-text">
                        Mascotas
                    </span>
                </Link>
            </li>
            <li>
                <a href="#!">
                    <i className="fas fa-file fa-2x"></i>
                    <span className="nav-text">
                       Reportes
                    </span>
                </a>
            </li>
        </ul>

        <ul className="logout">
            <li>
               <Link to="/">
                     <i className="fas fa-power-off fa-2x"></i>
                    <span className="nav-text">
                        Cerrar Sesión
                    </span>
                </Link>
            </li>  
        </ul>
    </nav>
  )
}

export default Menu