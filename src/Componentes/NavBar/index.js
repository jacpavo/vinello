import React from "react"
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="./Inicio"></NavLink>
                    <NavLink to="./Vinos"></NavLink>
                    <NavLink to="./Cervezas"></NavLink>
                    <NavLink to="./Espirituosas"></NavLink>
                    <NavLink to="./Contacto"></NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;
