import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import store from '../store';
import { fetchVets } from '../reducers'
import Nav from './Nav';
import AllVets from './AllVets';
import SingleVet from './SingleVet';

export default class Root extends Component {

    componentDidMount() {
        store.dispatch(fetchVets());
    }

    render() {
        return (
            <div>
                <Nav />
                <main>
                    <Switch>
                        <Route exact path="/" component={AllVets} />
                        <Route exact path="/vets/:id" component={SingleVet} />
                    </Switch>
                </main>
            </div>
        )
    }
}

