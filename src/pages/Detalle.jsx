import React from 'react'

const Detalle = () => {
  return (
    <div className="container mt-5" style={{ marginLeft: 56 + 'px' }}>
  <div className="row p-2" style={{ borderBottom: '2px dashed #ffc9cf' }}>
    <section className="col-5">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        </ol>
        <div className="carousel-inner">
          <div
            className="carousel-item active p-3"
            style={{ borderRadius: 10, backgroundColor: '#ffc9cf' }}
          >
            <img
              className="d-block w-100"
              src="/images/mascota1.jpg"
              alt="Mascota"
              style={{ borderRadius: 10 }}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
    <section className="col-7">
      <h4 className="mb-2">
        <i className="fa fa-dog" />
        <b> Nala</b>
      </h4>
      <div className="row m-2 p-2" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="col-md-6 ">
          <label className="labels mb-2">
            <i className="fa fa-id-card" />
            <b> Tipo de Mascota</b>
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            style={{ borderStyle: 'dashed', backgroundColor: '#fff' }}
            readOnly
            defaultValue="CANINO"
          />
        </div>
        <div className="col-md-6">
          <label className="labels mb-2">
            <i className="fa fa-bookmark" />
            <b> Raza</b>
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            style={{ borderStyle: 'dashed', backgroundColor: '#fff' }}
            readOnly
            defaultValue="BULLDOG FRANCES"
          />
        </div>
      </div>
      <div className="row m-2 p-2" style={{ border: '1px dashed #c3c3c3' }}>
        <div className="col-md-6 ">
          <label className="labels mb-2">
            <i className="fa fa-expand" />
            <b> Tamaño</b>
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            style={{ borderStyle: 'dashed', backgroundColor: '#fff' }}
            readOnly
            defaultValue="PEQUEÑO"
          />
        </div>
        <div className="col-md-6">
          <label className="labels mb-2">
            <i className="fa fa-venus-mars" />
            <b> Genero</b>
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            style={{ borderStyle: 'dashed', backgroundColor: '#fff' }}
            readOnly
            defaultValue="HEMBRA"
          />
        </div>
      </div>
      <div className="row m-2 p-2" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="col-md-4">
          <label className="labels mb-2">
            <i className="fa fa-heart" />
            <b> Edad</b>
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            style={{ borderStyle: 'dashed', backgroundColor: '#fff' }}
            readOnly
            defaultValue="2 AÑOS"
          />
        </div>
        <div className="col-md-4">
          <label className="labels mb-2">
            <i className="fa fa-weight-hanging" />
            <b> Peso</b>
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            style={{ borderStyle: 'dashed', backgroundColor: '#fff' }}
            readOnly
            defaultValue="5 KG"
          />
        </div>
        <div className="col-md-4">
          <label className="labels mb-2">
            <i className="fa fa-circle" />
            <b> Color</b>
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            style={{ borderStyle: 'dashed', backgroundColor: '#fff' }}
            readOnly
            defaultValue="AMARILLO Y BLANCO"
          />
        </div>
      </div>
    </section>
  </div>
  <div
    className="col-12 mt-5 mb-3 p-3"
    style={{ borderBottom: '2px solid #7a65a8' }}
  >
    <div
      className="mb-3 mt-3 p-3"
      style={{
        borderLeft: '8px solid #7a65a8',
        backgroundColor: '#fcfcfc',
        borderRadius: 6,
      }}
    >
      <h3>
        <i className="fa solid fa-dog" /> <b>Historial y Control de Vacunas</b>
      </h3>
    </div>
    <div className="col-12 p-3" style={{ backgroundColor: '#fcfcfc' }}>
      <table
        id="dataT"
        className="table table-sm table-hover text-center"
        style={{ width: '100%' }}
      >
        <thead style={{ color: '#7a65a8' }}>
          <tr>
            <th>Mascota</th>
            <th>Raza</th>
            <th>Vacuna</th>
            <th>Fecha de Vacuna</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody style={{ color: '#46346e' }}>
          <tr>
            <td>Nala - Canino</td>
            <td>Bulldog Frances</td>
            <td>Vacuna contra la Rabia</td>
            <td>2023-02-20</td>
            <td>Sin observaciones</td>
          </tr>
          <tr>
            <td>Nala - Canino</td>
            <td>Bulldog Frances</td>
            <td>Vacuna Polivalente</td>
            <td>2023-02-20</td>
            <td>Sin observaciones</td>
          </tr>
        </tbody>
        <tfoot style={{ color: '#7a65a8' }}>
          <tr>
            <th>Mascota</th>
            <th>Raza</th>
            <th>Vacuna</th>
            <th>Fecha de Vacuna</th>
            <th>Observaciones</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <div className="col-12 p-3" style={{ borderBottom: '2px solid #7a65a8' }}>
    <div
      className="mb-4 mt-3 p-3"
      style={{
        borderLeft: '8px solid #7a65a8',
        backgroundColor: '#fcfcfc',
        borderRadius: 6,
      }}
    >
      <h3>
        <i className="fa fa-weight-hanging" />{' '}
        <b>Historial y Control de Peso</b>
      </h3>
    </div>
    <div className="col-12 p-3" style={{ backgroundColor: '#fcfcfc' }}>
      <table
        id="dataT2"
        className="table table-sm table-hover text-center"
        style={{ width: '100%' }}
      >
        <thead style={{ color: '#7a65a8' }}>
          <tr>
            <th>Mascota</th>
            <th>Raza</th>
            <th>Peso</th>
            <th>Fecha de Control</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody style={{ color: '#46346e' }}>
          <tr>
            <td>Nala - Canino</td>
            <td>Bulldog Frances</td>
            <td>7kg</td>
            <td>2023-02-20</td>
            <td>Sin observaciones</td>
          </tr>
          <tr>
            <td>Nala - Canino</td>
            <td>Bulldog Frances</td>
            <td>5kg</td>
            <td>2023-04-20</td>
            <td>Sin observaciones</td>
          </tr>
        </tbody>
        <tfoot style={{ color: '#7a65a8' }}>
          <tr>
            <th>Mascota</th>
            <th>Raza</th>
            <th>Vacuna</th>
            <th>Fecha de Vacuna</th>
            <th>Observaciones</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <div className="col-12 p-3">
    <div
      className="mb-4 mt-3 p-3"
      style={{
        borderLeft: '8px solid #7a65a8',
        backgroundColor: '#fcfcfc',
        borderRadius: 6,
      }}
    >
      <h3>
        <i className="fa fa-weight-hanging" />{' '}
        <b>Seguimiento y Condiciones de Salud</b>
      </h3>
    </div>
    <div className="col-12 p-3" style={{ backgroundColor: '#fcfcfc' }}>
      <table
        id="dataT3"
        className="table table-sm table-hover text-center"
        style={{ width: '100%' }}
      >
        <thead style={{ color: '#7a65a8' }}>
          <tr>
            <th>Mascota</th>
            <th>Raza</th>
            <th>Examenes de Laboratorio</th>
            <th>Tipo de Condicion de Salud</th>
            <th>Alergias</th>
            <th>Recomendaciones de Cuidado</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</div>

  )
}

export default Detalle