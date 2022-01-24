
import React from "react";
import './ItemCount.css'

function ItemCounter (){
   const [counter, setCounter] = React.useState(0);

   const contarClick = () => {
       setCounter(counter + 1);
   }

   const restarClick = () => {
       setCounter(counter - 1)
   };
   
   

    return (
        <div className ="contador">
            <h4>Agregar al Carrito</h4>
        <button onClick= {restarClick}>-</button>
        <span>{counter}</span>
        <button onClick= {contarClick} >+</button>
        <button className="plusbag">Agregar Carrito</button>
        </div>
);

}

export default ItemCounter;