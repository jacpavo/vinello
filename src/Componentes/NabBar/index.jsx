import './stylenav.css'

const NavBar = () => {
    return <nav> 
                <img src="./Vinelo-Logo.svg" alt="logo" class="logo"></img>
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
                </ul>
         </nav>;
};

export default NavBar;