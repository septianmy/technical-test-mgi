import React from 'react';
import {Link} from 'react-router-dom'
import { Logo } from '../../assets';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="logo">
                        <Link to="/"><img src={Logo} className="logo"/></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar
