import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mt-5" style={{ marginLeft: 56 + 'px' }}>
            <div className="alert alert-inicio" role="alert">
                <b>Bienvenid@ Pepito Perez</b> aquí podrá administrar opciones e información
                de usted y sus mascotas según lo requiera.
            </div>
            <hr />
            <div
                className="col-12 mt-5"
                style={{ backgroundColor: '#ffe6fb', color: '#46346e', borderRadius: 10 }}
            >
                <h3 className="p-3">
                    <i className="fa solid fa-dog fa-2x" /> <b>Mis Mascotas</b>
                </h3>
            </div>
            <div className="row mt-5 d-flex justify-content-center">
                <div className="card col-4">
                    <div className="face face1">
                        <img src="/images/mascota1.jpg" width={600} height={200} />
                    </div>
                    <div className="face face2 text-center" style={{ background: '#ffc9cf' }}>
                        <div className="content row">
                            <h5 style={{ color: '#fff' }}>
                                <b>Nala</b>
                            </h5>
                            <div className="col-6">
                                <p>
                                    <i className="fa fa-id-card" /> Canino
                                </p>
                                <p>
                                    <i className="fa fa-bookmark" /> Bulldog
                                </p>
                                <p>
                                    <i className="fa fa-expand" /> Pequeño
                                </p>
                            </div>
                            <div className="col-6">
                                <p>
                                    <i className="fa fa-venus-mars" /> Hembra
                                </p>
                                <p>
                                    <i className="fa fa-heart" /> 2 años
                                </p>
                                <p>
                                    <i className="fa fa-weight-hanging" /> 5kg
                                </p>
                            </div>
                            <Link to="/admin/mascota/detalle">Ver mas</Link>
                        </div>
                    </div>
                </div>
                <div className="card col-4">
                    <div className="face face1">
                        <img src="images/mascota4.jpg" width={600} height={200} />
                    </div>
                    <div
                        className="face face2  text-center"
                        style={{ background: '#94b3f7' }}
                    >
                        <div className="content row">
                            <h5 style={{ color: '#fff' }}>
                                <b>Rocky</b>
                            </h5>
                            <div className="col-6">
                                <p>
                                    <i className="fa fa-id-card" /> Canino
                                </p>
                                <p>
                                    <i className="fa fa-bookmark" /> Corgi Galés
                                </p>
                                <p>
                                    <i className="fa fa-expand" /> Pequeño
                                </p>
                            </div>
                            <div className="col-6">
                                <p>
                                    <i className="fa fa-venus-mars" /> Macho
                                </p>
                                <p>
                                    <i className="fa fa-heart" /> 4 años
                                </p>
                                <p>
                                    <i className="fa fa-weight-hanging" /> 6kg
                                </p>
                            </div>
                            <a href="#">Ver mas</a>
                        </div>
                    </div>
                </div>
                <div className="card col-4">
                    <div className="face face1">
                        <img src="images/mascota5.jpg" width={600} height={200} />
                    </div>
                    <div className="face face2 text-center" style={{ background: '#ffc9cf' }}>
                        <div className="content row">
                            <h5 style={{ color: '#fff' }}>
                                <b>Luna</b>
                            </h5>
                            <div className="col-6">
                                <p>
                                    <i className="fa fa-id-card" /> Felino
                                </p>
                                <p>
                                    <i className="fa fa-bookmark" /> Bengalí
                                </p>
                                <p>
                                    <i className="fa fa-expand" /> Pequeño
                                </p>
                            </div>
                            <div className="col-6">
                                <p>
                                    <i className="fa fa-venus-mars" /> Hembra
                                </p>
                                <p>
                                    <i className="fa fa-heart" /> 3 años
                                </p>
                                <p>
                                    <i className="fa fa-weight-hanging" /> 4kg
                                </p>
                            </div>
                            <a href="#">Ver mas</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>

    )
}

export default Home;
