import React from 'react';
import {  NavLink } from 'react-router-dom';


const Header = () => (
    <header>
        <h1>Control de Gastos Giuliana</h1>
        <NavLink to="/" exact={true} activeClassName="is-active">Pantalla Principal</NavLink>
        <NavLink to="/crear" activeClassName="is-active">Add GastosPage Test</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help!</NavLink>
    </header>
)

export default Header;