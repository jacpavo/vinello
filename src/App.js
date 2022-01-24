
import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Componentes/NabBar';
import Card from './Componentes/Card';
import {getCervezas } from "./baseDeDatos";
import Item from './Componentes/Items/Item'



  

function App() {
const [cerveza, setCerveza] = useState ([]);

  useEffect (() => {
    getCervezas()
    .then((data)=> setCerveza (data))
    .catch((error) => console.log(error));
    }, []);
    
   

  return (
    <div className="App">
      <NavBar />
      <Card marca="Nieto Senetiner" cepa="Malbec" año="2008"/>
      <Card marca="Salentein" cepa="Cabernet Saugvinon" año="2020"/>
      {cerveza.map((cerveza)=>(
        <Item key={cerveza.id} cerveza={cerveza}/>))}
    </div>
  );
}

export default App;



