import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';

export default class ModificarPersonaje extends Component {
    cajaselectserie = React.createRef();
    cajapersonajes = React.createRef();
    state = {
        series: [],
        status: false,
        personajes: [],
        idSerie: 0,
        mensaje: ""
    }
    componentDidMount() {
        this.cargarSeries();
        this.cargarPersonajes();
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
    cargarPersonajes() {
        var request = "/api/Personajes";
        axios.get(Global.urlSeries + request).then(res => {
            console.log(res.data);
            this.setState({
                personajes: res.data,

            })
        })

    }

    putPersonaje = e => {
        e.preventDefault();
        var serie = this.cajaselectserie.current.value;
        var personaje = this.cajapersonajes.current.value;
        console.log(serie, personaje)
        var request = "/api/Personajes/" + personaje + "/" + serie;
        axios.put(Global.urlSeries + request).then(res => {
            this.setState({
                mensaje: "Personaje cambiado de serie correctamente"
            })
        })


    }


    render() {
        return (
            <div className="container">
                <h1>Personajes y series</h1>
                <form className="card p-4" onSubmit={this.putPersonaje} >

                    <label>Series: </label>

                    <select className="dropdown" ref={this.cajaselectserie}  >


                        {this.state.series.map((serie, i) => {
                            return (<option key={i} value={serie.idSerie}>{serie.nombre}</option>)
                        })}
                    </select>


                    <label>Personajes: </label>

                    <select className="dropdown" ref={this.cajapersonajes} >

                        <option disabled>selecciona</option>
                        {this.state.personajes.map((personaje, i) => {
                            return (<option key={i} value={personaje.idPersonaje}>{personaje.nombre}</option>)
                        })}
                    </select>
                    <br></br>




                    <button className="btn btn-success">Cambiar</button>

                </form>
                <h2>{this.state.mensaje}</h2>


            </div>
        )
    }
}
