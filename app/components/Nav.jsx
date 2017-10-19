import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() { 
        return (
            <nav>
                <div id="title">
                    <Link to="/"><h2>Margaret Hamilton Interplanetary Academy of JavaScript</h2></Link>
                </div>
                <div id="menu">
                    <Link to="/campuses" className={window.location.pathname === '/campuses' ? 'active' : ''}><div>Campuses</div></Link>
                    <Link to="/students" className={window.location.pathname === '/students' ? 'active' : ''}><div>Students</div></Link>
                </div>
            </nav>
        )
    
    }
}