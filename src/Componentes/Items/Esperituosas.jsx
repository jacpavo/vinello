import React from "react"
import './Items.css'
import ItemCounter from '../ItemCounter/ItemCount'

const spirits = ({espirituosa}) => {

    return(
        <div className= "spiritsCard">
            <img src="" alt="" />
            <p> Nombre: {espirituosa.name}</p>
            <p> Descripcion: {espirituosa.description} </p>
            <p> Precio: {espirituosa.price}</p> 
            <ItemCounter/>
        </div>
    );
};

export default spirits