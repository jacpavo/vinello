import React from 'react'
import './styllecardwine.css'
function WineCard ({ marca, cepa, año }) {
    return ( 
        <div className="winecard">
            <p>Marca: {marca} </p>
            <p>Cepa: {cepa} </p>
            <p>Año: {año} </p>
        </div>
    );
}

export default WineCard