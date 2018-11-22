import React from 'react';
import {NavLink, withRouter } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color:'green',
        fontSize:'2rem'
    };

    return(
        <div>
            <ul>
                <li>
                    <NavLink exact to="/" activeStyle={activeStyle}>Home Place</NavLink>
                </li>
                <li>
                    <NavLink exact to="/about" activeStyle={activeStyle}>Introduce</NavLink>
                </li>
                <li>
                    <NavLink to="/about/react" activeStyle={activeStyle}>React Introduce</NavLink>
                </li>
                <li>
                    <NavLink to="/posts" activeStyle={activeStyle}>Posts List</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default withRouter(Menu);