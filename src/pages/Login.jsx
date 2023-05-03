import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
  return (
    <div className="row m-0 p-0">
      <div
        className="col-sm-12 col-md-6 col-lg-6 p-0"
        id="section1"
        style={{ backgroundColor: '#7a65a8', height: 'auto' }}
      >
        <img src="/images/img2.png" height={919} />
      </div>
      <div className="col-sm12 col-md-6 col-lg-6" id="section2">
        <section id="loginForm">
          <form action="inicio.html">
            <h2 className="mb-4">
              <b>Iniciar Sesión</b>
            </h2>
            <hr />
            <label className="mb-4">
              <b>Usuario</b>
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-user-tie" style={{ color: '#7a65a8' }} />
                </span>
              </div>
              <input
                type="text"
                name
                className="form-control form-control-sm"
                placeholder="username or email"
                value="admin@appmascotas.com"
              />
            </div>
            <br />
            <label className="mb-4">
              <b>Contraseña</b>
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-key icon" style={{ color: '#7a65a8' }} />
                </span>
              </div>
              <input
                type="Password"
                name
                className="form-control form-control-sm"
                placeholder="password"
                value="1234"
              />
            </div>
            <hr />
            <Link className="btn col-12 mt-4" id="btnLogin" to="/admin">
              <b>Ingresar</b>
            </Link>
            <div className="text-center mt-4">
              <p>
                ¿Aún no tienes cuenta? <a href>Registrate</a>
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>

  )
}

export default Login;