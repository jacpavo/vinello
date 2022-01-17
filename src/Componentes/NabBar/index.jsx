import logo from '../assets/Vinello-Logo.svg'
import CartIcon from '../Icons/CartIcon';
import './stylenav.css'


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
                        <CartIcon/>
                    </li>
                </ul>
                
         </nav>;
         <h1>Vinello</h1>
};

export default NavBar;
