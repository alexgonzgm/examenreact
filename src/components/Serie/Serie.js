import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class Serie extends Component {
    state = {
        serie: {},
        status: false
    }
    componentDidMount() {
        this.getSerie();


    }
    // componentDidUpdate() {
    //     this.getSerie();
    // }

    getSerie() {
        var id = this.props.idSerie;
        var request = "/api/Series/" + id;
        axios.get(Global.urlSeries + request).then(res => {
            console.log(res.data)
            this.setState({
                serie: res.data,
                status: true
            });

        });

    }


    render() {
        return (
            <div className="container">

                <div className="card p-4 ">
                    <h1>{this.state.serie.nombre}</h1>
                    <img className="col-8" src={this.state.serie.imagen}></img>
                    <div className="card p-3 m-3">
                        <h4>Año de lanzamiento : {this.state.serie.anyo}</h4>
                        <h4>Puntuación : {this.state.serie.puntuacion}</h4>
                        <a href={"/personajes/" + this.state.serie.idSerie} className="btn btn-info">Personajes</a>

                    </div>

                </div>



            </div>
        )
    }
}
