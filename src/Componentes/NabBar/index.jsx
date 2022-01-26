import React from 'react'
import CartIcon from '/Users/javiercascante/Documents/JAPI/CODE/React JS/coder-rj-jc/src/Componentes/Icons/CartIcon.jsx'
import './stylenav.css'


const NavBar = () => {
    return <nav> 
                <h1>Vinello</h1>
                <ul>
                    <li>
                        <a>Inicio</a>
                    </li>
                    <li>
                        <a>Vinos</a>
                    </li>
                    <li>
                        <a>Cervezas</a>
                    </li>
                    <li>
                        <a>Espirituosas</a>
                    </li>
                    <li>
                        <a>Contacto</a>
                    </li>
                    <li>
                        <a> <CartIcon className='icon'/> </a>
                    </li>
                </ul>
                
         </nav>;
    
};

export default NavBar;
