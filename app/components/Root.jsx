import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import store from '../store';
import { fetchCampuses, fetchStudents } from '../reducers'
import Nav from './Nav';
import AllCampuses from './AllCampuses';
import SingleCampus from './SingleCampus';
import EditCampus from './EditCampus';
import AddCampus from './AddCampus';
import AllStudents from './AllStudents';
import SingleStudent from './SingleStudent';
import EditStudent from './EditStudent';
import AddStudent from './AddStudent';

export default class Root extends Component {

    componentDidMount() {
        store.dispatch(fetchCampuses());
        store.dispatch(fetchStudents());
    }

    render() {
        return (
            <div id="school-main">
                <div id="title">
                    <h2>Margaret Hamilton Interplanetary Academy of JavaScript</h2>
                </div>
                <Nav />
                <main>
                    <Switch>
                        <Route exact path="/campuses" component={AllCampuses} />
                        <Route exact path="/campuses/:id" component={SingleCampus} />
                        <Route exact path="/campuses/edit/:id" component={EditCampus} />
                        <Route path="/new-campus" component={AddCampus} />
                        <Route exact path="/students" component={AllStudents} />
                        <Route exact path="/students/:id" component={SingleStudent} />
                        <Route exact path="/students/edit/:id" component={EditStudent} />
                        <Route path="/new-student" component={AddStudent} />} />
                        <Route component={AllCampuses} />
                    </Switch>
                </main>
            </div>
        )
    }
}

