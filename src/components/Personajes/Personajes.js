import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';


export default class Personajes extends Component {
    state = {
        personajes: [],
        status: true
    }
    componentDidMount() {
        this.getPersonajes();
    }

    getPersonajes() {
        var id = this.props.idSerie;
        var request = "/api/Series/PersonajesSerie/" + id;
        axios.get(Global.urlSeries + request).then(res => {
            console.log(res.data);
            this.setState({
                personajes: res.data,
                status: true,
                idSerie: id
            })
        })

    }
    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>nombre</td>
                            <td>imagen</td>
                            <td></td>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.personajes.map((personaje, i) => {
                            return (
                                <React.Fragment >
                                    <tr>
                                        <td>{personaje.nombre}</td>
                                        <td>
                                            <img className="col-5" src={personaje.imagen}></img>
                                        </td>
                                    </tr>
                                </React.Fragment>

                            )
                        })}

                    </tbody>

                </table>
                <NavLink className="btn btn-info" to={"/serie/" + this.state.idSerie}>Volver a la serie</NavLink>


            </div>
        )
    }
}
