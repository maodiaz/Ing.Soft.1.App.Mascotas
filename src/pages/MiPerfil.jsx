import React from 'react'

const MiPerfil = () => {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
  <div className="row d-flex justify-content-center">
    <div
      className="col-md-5 border-right"
      style={{ borderRight: '2px solid #7a65a8' }}
    >
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img
          className="rounded-circle mt-5"
          width="200px"
          src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
        />
        <span className="font-weight-bold">Edogaru</span>
        <span className="text-black-50">edogaru@mail.com.my</span>
        <span> </span>
      </div>
    </div>
    <div className="col-md-7 border-right">
      <div className="p-3 py-5">
        <div className="col-12 text-center mb-5">
          <h2 className="text-right" style={{ color: '#46346e' }}>
            <i className="fa fa-user-circle" />
            <b> Configuración de Perfil</b>
          </h2>
        </div>
        <hr />
        <div className="row mt-3 p-2" style={{ border: '1px dashed #f3f3f3' }}>
          <div className="col-md-12">
            <label className="labels">
              <b>Usuario</b>
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Usuario"
              defaultValue
            />
          </div>
          <div className="col-md-12 mt-2">
            <label className="labels">
              <b>Contraseña</b>
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Contraseña"
              defaultValue
            />
          </div>
          <div className="col-md-12 mb-2 mt-2">
            <label className="labels">
              <b>Confirmar Contraseña</b>
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Confirmar Contraseña"
              defaultValue
            />
          </div>
        </div>
        <div className="row mt-2 p-2" style={{ border: '1px dashed #f3f3f3' }}>
          <div className="col-md-6">
            <label className="labels">
              <b>Nombre</b>
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Nombres"
              defaultValue
            />
          </div>
          <div className="col-md-6">
            <label className="labels">
              <b>Apellido</b>
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              defaultValue
              placeholder="Apellidos"
            />
          </div>
        </div>
        <div className="row mt-3 p-2" style={{ border: '1px dashed #f3f3f3' }}>
          <div className="col-md-12">
            <label className="labels">
              <b>Número de Teléfono</b>
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Número de Teléfono"
              defaultValue
            />
          </div>
        </div>
        <div className="row mt-3 p-2" style={{ border: '1px dashed #f3f3f3' }}>
          <div className="col-md-12">
            <label className="labels">
              <b>Dirección</b>
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Dirección"
              defaultValue
            />
          </div>
        </div>
        <div className="row mt-3 p-2" style={{ border: '1px dashed #f3f3f3' }}>
          <div className="col-md-12">
            <label className="labels">
              <b>Correo Electrónico</b>
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Correo Electrónico"
              defaultValue
            />
          </div>
        </div>
        <div className="mt-5 text-center">
          <button className="btn" id="profile-button" type="button">
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default MiPerfil