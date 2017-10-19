import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <div className="main">
            <div className="welcome">Welcome</div>
            <div className="welcome-image"><Link to="/campuses"><img src="/welcome.png" /></Link></div>
        </div>
    )
}