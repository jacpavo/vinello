
import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Componentes/NabBar';
import Card from './Componentes/Card';
import {getCervezas, getEspirituosas } from "./baseDeDatos";
import Item from './Componentes/Items/Item'



  

function App() {
const [cerveza, setCerveza] = useState ([]);
const [espirituosa, setEspirituosa] =useState ([]);

  useEffect (() => {
    getCervezas()
    .then((data)=> setCerveza (data))
    .catch((error) => console.log(error));
    }, []);
  
  useEffect (() => {
    getEspirituosas()
    .then((data)=> setEspirituosa (data))
    .catch((error) => console.log(error));
    }, []);
   

  return (
    <div className="App">
      <NavBar />
      <Card marca="Nieto Senetiner" cepa="Malbec" año="2008"/>
      <Card marca="Salentein" cepa="Cabernet Saugvinon" año="2020"/>
      {cerveza.map((cerveza)=>(
        <Item key={cerveza.id} cerveza={cerveza}/>))}
      {espirituosa.map((espirituosa)=>(
        <Item key={espirituosa.id} cerveza={espirituosa}/>))}
    </div>
  );
}

export default App;



