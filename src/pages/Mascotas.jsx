import React from 'react'

const Mascotas = () => {
    return (
        <>
            <div className="container rounded bg-white mt-5 mb-5" style={{ marginLeft: 56 + 'px' }}>
                <nav aria-label="breadcrumb p-3">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="inicio.html">Inicio</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Mascotas
                        </li>
                    </ol>
                </nav>
                <div
                    className="mb-5 p-3"
                    style={{
                        borderLeft: '8px solid #7a65a8',
                        backgroundColor: '#fcfcfc',
                        borderRadius: 6,
                    }}
                >
                    <h3>
                        <i className="fa solid fa-dog" /> <b>Mis Mascotas</b>
                    </h3>
                </div>
                <div className="row mb-5 d-flex justify-content-end">
                    <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#registrarMascota"
                        className="btn col-2"
                        style={{ backgroundColor: '#7a65a8', color: '#fff', marginRight: 5 }}
                    >
                        <i className="fa fa-plus-circle" /> Registrar Mascota
                    </button>
                    <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#registrarFotografiaMascota"
                        className="btn col-2"
                        style={{ backgroundColor: '#7a65a8', color: '#fff' }}
                    >
                        <i className="fa fa-camera" /> Subir Fotos Mascota
                    </button>
                </div>
                <table
                    id="dataT"
                    className="table table-sm table-hover"
                    style={{ width: '100%' }}
                >
                    <thead style={{ color: '#7a65a8' }}>
                        <tr>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Tipo Mascota</th>
                            <th>Color</th>
                            <th>Raza</th>
                            <th>Peso</th>
                            <th>Genero</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody style={{ color: '#46346e' }}>
                        <tr>
                            <td>Rocky</td>
                            <td>4 Años</td>
                            <td>Canino</td>
                            <td>Amarillo y blanco</td>
                            <td>Corgi Galés</td>
                            <td>6kg</td>
                            <td>Macho</td>
                            <td>
                                <button
                                    className="btn"
                                    style={{ margin: 0, padding: '0px 4px 0px 4px' }}
                                >
                                    <i className="fa fa-edit m-0" style={{ color: 'cadetblue' }} />
                                </button>
                                <button
                                    className="btn"
                                    style={{ margin: 0, padding: '0px 4px 0px 4px' }}
                                >
                                    <i className="fa fa-trash m-0" style={{ color: 'firebrick' }} />
                                </button>
                                <button
                                    className="btn"
                                    style={{ margin: 0, padding: '0px 4px 0px 4px' }}
                                >
                                    <i className="fa fa-eye m-0" style={{ color: '#46346e' }} />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Nala</td>
                            <td>2 Años</td>
                            <td>Canino</td>
                            <td>Amarillo y blanco</td>
                            <td>Bulldog Frances</td>
                            <td>5kg</td>
                            <td>Hembra</td>
                            <td>
                                <button
                                    className="btn"
                                    style={{ margin: 0, padding: '0px 4px 0px 4px' }}
                                >
                                    <i className="fa fa-edit m-0" style={{ color: 'cadetblue' }} />
                                </button>
                                <button
                                    className="btn"
                                    style={{ margin: 0, padding: '0px 4px 0px 4px' }}
                                >
                                    <i className="fa fa-trash m-0" style={{ color: 'firebrick' }} />
                                </button>
                                <button
                                    className="btn"
                                    style={{ margin: 0, padding: '0px 4px 0px 4px' }}
                                >
                                    <i className="fa fa-eye m-0" style={{ color: '#46346e' }} />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Luna</td>
                            <td>3 Años</td>
                            <td>Felino</td>
                            <td>Amarillo y blanco</td>
                            <td>Bengalí</td>
                            <td>4kg</td>
                            <td>Hembra</td>
                            <td>
                                <button
                                    className="btn"
                                    style={{ margin: 0, padding: '0px 4px 0px 4px' }}
                                >
                                    <i className="fa fa-edit m-0" style={{ color: 'cadetblue' }} />
                                </button>
                                <button
                                    className="btn"
                                    style={{ margin: 0, padding: '0px 4px 0px 4px' }}
                                >
                                    <i className="fa fa-trash m-0" style={{ color: 'firebrick' }} />
                                </button>
                                <button
                                    className="btn"
                                    style={{ margin: 0, padding: '0px 4px 0px 4px' }}
                                >
                                    <i className="fa fa-eye m-0" style={{ color: '#46346e' }} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot style={{ color: '#7a65a8' }}>
                        <tr>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Tipo Mascota</th>
                            <th>Color</th>
                            <th>Raza</th>
                            <th>Peso</th>
                            <th>Genero</th>
                            <th>Opciones</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div
                className="modal fade"
                id="registrarMascota"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                            <section className="col-12 p-4">
                                <h4 className="text-center" style={{ color: '#46346e' }}>
                                    <b>
                                        <i className="fa fa-dog" /> Registrar Mascota
                                    </b>
                                </h4>
                                <div
                                    className="row mt-5 p-2"
                                    style={{ border: '1px dashed #f3f3f3' }}
                                >
                                    <div className="col-md-12 m-2">
                                        <label className="labels">
                                            <b>Nombre</b>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Nombre"
                                            
                                        />
                                    </div>
                                    <div className="col-md-12 m-2">
                                        <label className="labels">
                                            <b>Edad</b>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Edad"
                                            
                                        />
                                    </div>
                                    <div className="col-md-12 m-2">
                                        <label className="labels">
                                            <b>Tipo Mascota</b>
                                        </label>
                                        <select
                                            name="tipoMascota"
                                            id="tipoMascota"
                                            className="form-control form-control-sm"
                                        >
                                            <option disabled selected>
                                                SELECCIONAR
                                            </option>
                                            <option value="CANINO">CANINO</option>
                                            <option value="FELINO">FELINO</option>
                                            <option value="ROEDOR">ROEDOR</option>
                                            <option value="AVE">AVE</option>
                                            <option value="PEZ">PEZ</option>
                                            <option value="EQUINO">EQUINO</option>
                                            <option value="EXOTICO">EXOTICO</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 m-2">
                                        <label className="labels">
                                            <b>Color</b>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Color"
                                            
                                        />
                                    </div>
                                    <div className="col-md-12 m-2">
                                        <label className="labels">
                                            <b>Raza</b>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Raza"
                                            
                                        />
                                    </div>
                                    <div className="col-md-12 m-2">
                                        <label className="labels">
                                            <b>Peso</b>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Peso"
                                            
                                        />
                                    </div>
                                    <div className="col-md-12 m-2">
                                        <label className="labels">
                                            <b>Genero</b>
                                        </label>
                                        <select
                                            name="tipoMascota"
                                            id="tipoMascota"
                                            className="form-control form-control-sm"
                                        >
                                            <option disabled selected>
                                                SELECCIONAR
                                            </option>
                                            <option value="HEMBRA">HEMBRA</option>
                                            <option value="MACHO">MACHO</option>
                                        </select>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                            <button
                                type="button"
                                className="btn"
                                style={{ backgroundColor: '#7a65a8', color: '#fff' }}
                            >
                                Registrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>;

            <div
                className="modal fade"
                id="registrarFotografiaMascota"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                            <section className="col-12 p-4">
                                <h4 className="text-center" style={{ color: '#46346e' }}>
                                    <b>
                                        <i className="fa fa-camera" /> Registrar Fotografias Mascota
                                    </b>
                                </h4>
                                <div
                                    className="row mt-5 p-2"
                                    style={{ border: '1px dashed #f3f3f3' }}
                                >
                                    <div className="col-md-12 m-2">
                                        <label className="labels">
                                            <b>Mascota</b>
                                        </label>
                                        <select
                                            name="tipoMascota"
                                            id="tipoMascota"
                                            className="form-control form-control-sm"
                                        >
                                            <option disabled selected>
                                                SELECCIONAR
                                            </option>
                                            <option value>LUNA - FELINO</option>
                                            <option value>NALA - CANINO</option>
                                            <option value>ROCKY - CANINO</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 m-2">
                                        <label className="labels">
                                            <b>FOTOGRAFIA(S)</b>
                                        </label>
                                        <input
                                            type="file"
                                            multiple
                                            name="fotografias[]"
                                            id="fotografias"
                                            className="form-control form-control-sm"
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                            <button
                                type="button"
                                className="btn"
                                style={{ backgroundColor: '#7a65a8', color: '#fff' }}
                            >
                                Registrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>;


        </>

    )
}

export default Mascotas