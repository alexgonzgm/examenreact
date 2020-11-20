import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {

    state = {
        series: [],
        status: false
    }
    componentDidMount() {
        this.cargarSeries();
    }

    cargarSeries() {
        var request = "/api/Series";
        axios.get(Global.urlSeries + request).then(res => {
            console.log(res.data);
            this.setState({
                series: res.data,
                status: true
            })
        })

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Todas las series</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/nuevopersonaje">Nuevo personaje</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/modificarpersonaje">Modificar serie</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Series
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                                    {this.state.series.map((serie, i) => {
                                        return (<a className="dropdown-item" href={"/serie/" + serie.idSerie} key={i}>{serie.nombre}</a>)
                                    })}

                                </div>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}
