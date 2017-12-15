import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() { 
        return (
            <nav>
                <div id="title">
                    <Link to="/"><h2>HappyVet</h2></Link>
                </div>
                <div id="menu">
                    <Link to="/vets"><div>My Vets</div></Link>
                </div>
            </nav>
        )
    
    }
}