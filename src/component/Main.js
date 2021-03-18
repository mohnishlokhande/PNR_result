import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/Home';


export default class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
