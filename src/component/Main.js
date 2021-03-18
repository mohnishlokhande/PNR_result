import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Profile from './profile/Profile';


export default class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/profile" component={Profile} />
                </Switch>
            </BrowserRouter>
        )
    }
}
