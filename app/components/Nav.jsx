import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return (
        <nav>
            <Link to="/campuses"><li>Campuses</li></Link>
            <Link to="/students"><li>Students</li></Link>
        </nav>
    )
}