import React from 'react'
import './Items.css'
import ItemCounter from '../ItemCounter/ItemCount'


const beer = ({cerveza}) => {
    
    return(
        <div className= "beerCard">
            <img scr={cerveza.img} alt={cerveza.name} />
            <p> Nombre: {cerveza.name}</p>
            <p> Descripcion: {cerveza.description} </p>
            <p> Precio: {cerveza.price}</p> 
            <ItemCounter/>
        </div>
        

    
    );
};


export default beer
