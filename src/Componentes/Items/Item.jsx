import React from 'react'
import './Items.css'


const Item = ({ cerveza}) => {
    
    return(
        <div className= "beerCard">
            <img scr={cerveza.img} alt={cerveza.name} />
            <p> Nombre: {cerveza.name}</p>
            <p> Descripcion: {cerveza.description} </p>
            <p> Precio: {cerveza.price}</p>
            
        </div>
    );
};

export default Item