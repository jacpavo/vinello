import React from 'react'
import './styllecardwine.css'
import ItemCounter from '../ItemCounter/ItemCount'
function WineCard ({ marca, cepa, año }) {
    return ( 
        <div className="winecard">
            <p>Marca: {marca} </p>
            <p>Cepa: {cepa} </p>
            <p>Año: {año} </p>
            <ItemCounter/>
        </div>
    );
}

export default WineCard