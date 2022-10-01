import React from 'react';
import './Navigation.css';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className='navigation'>
            <div>
            <NavLink className="navlink" to="/login">Login</NavLink>
            </div>
            
            <div>
            <NavLink className="navlink" to="/signup">Signup</NavLink>
            </div>
        </div>
    );
};

export default Navigation;