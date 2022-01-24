import React from 'react'
import CartIcon from '/Users/javiercascante/Documents/JAPI/CODE/React JS/coder-rj-jc/src/Componentes/Icons/CartIcon.jsx'
import './stylenav.css'


const NavBar = () => {
    return <nav> 
                <h1>Vinello</h1>
                <ul>
                    <li>
                        <a href="..//Paginas/Inicio.js">Inicio</a>
                    </li>
                    <li>
                        <a href="..//Paginas/Vinos.js">Vinos</a>
                    </li>
                    <li>
                        <a href="..//Paginas/Cervezas.js">Cervezas</a>
                    </li>
                    <li>
                        <a href="..//Paginas/Espirituosas.js">Espirituosas</a>
                    </li>
                    <li>
                        <a href="..//Paginas/Contacto.js">Contacto</a>
                    </li>
                    <li>
                        <a href="./Icons/CartIcon.js"> <CartIcon className='icon'/> </a>
                    </li>
                </ul>
                
         </nav>;
    
};

export default NavBar;
