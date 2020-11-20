import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddPersonaje from './Add/AddPersonaje';
import Menu from './Menu/Menu';
import ModificarPersonaje from './ModificarPersonaje/ModificarPersonaje';
import Personajes from './Personajes/Personajes';
import Serie from './Serie/Serie';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Menu></Menu>
                <Switch>
                    <Route exact path="/serie/:idSerie" render={props => {
                        var id = props.match.params.idSerie;
                        return (<Serie idSerie={id}></Serie>)
                    }} />

                    <Route exact path="/personajes/:idSerie" render={props => {
                        var id = props.match.params.idSerie;
                        return (<Personajes idSerie={id}></Personajes>)
                    }} />

                    <Route exact path="/nuevopersonaje" component={AddPersonaje} ></Route>
                    <Route exact path="/modificarpersonaje" component={ModificarPersonaje} ></Route>

                </Switch>
            </BrowserRouter>
        )
    }
}