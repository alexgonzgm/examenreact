import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';

export default class AddPersonaje extends Component {
    cajaimagen = React.createRef();
    cajanombre = React.createRef();
    cajaselect = React.createRef();
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

    addPersonaje = e => {
        e.preventDefault();
        var nombre = this.cajanombre.current.value;
        var imagen = this.cajaimagen.current.value;
        var serie = parseInt(this.cajaselect.current.value);
        var serie = {
            idPersonaje: 1,
            nombre: nombre,
            imagen: imagen,
            idSerie: serie
        };
        console.log(serie)
        var url = Global.urlSeries + "/api/Personajes";
        axios.post(url, serie).then(res => {
            console.log("insert")
        });


    }

    render() {
        return (
            <div className="container">
                <h1>Nuevo personaje</h1>
                <form className="card" onSubmit={this.addPersonaje}>
                    <label>Nombre : </label>
                    <input
                        type="text"
                        name="cajanombre"
                        ref={this.cajanombre}
                        className="form-control"

                    />

                    <label>Imagen : </label>
                    <input
                        type="file"
                        name="cajaimagen"
                        ref={this.cajaimagen}
                        className="form-control"

                    />
                    <label>Serie:</label>


                    <select className="dropdown" ref={this.cajaselect} >

                        <option disabled>selecciona</option>
                        {this.state.series.map((serie, i) => {
                            return (<option key={i} value={serie.idSerie}>{serie.nombre}</option>)
                        })}
                    </select>



                    <button className="btn btn-success">Crear</button>

                </form>


            </div>
        )
    }
}
