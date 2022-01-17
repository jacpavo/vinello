import logo from '../assets/Vinello-Logo.svg'
import './stylenav.css'
import CartWidget from './CartWidget';

const NavBar = () => {
    return <nav> 
        <img src={logo} alt="Logo" className="logo"></img>
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
                        <CartWidget/>
                    </li>
                </ul>
                
         </nav>;
         <h1>Vinello</h1>
};

export default NavBar;
