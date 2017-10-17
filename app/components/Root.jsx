import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import store from '../store';
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
    constructor(props) {
        super(props);
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
                        <Route path="/campuses/:id" component={SingleCampus} />
                        <Route path="/campuses/:id/edit" component={EditCampus} />
                        <Route path="/new-campus" component={AddCampus} />
                        <Route exact path="/students" component={AllStudents} />
                        <Route path="/students/:id" component={SingleStudent} />
                        <Route path="/students/:id/edit" component={EditStudent} />
                        <Route path="/new-student" component={AddStudent} />} />
                        <Route component={AllCampuses} />
                    </Switch>
                  </main>
                </div>
        )
    }
}

