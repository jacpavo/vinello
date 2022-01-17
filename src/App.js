
import React from 'react';
import './App.css';
import NavBar from './Componentes/NabBar';
import Card from './Componentes/Card'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Card marca="Nieto Senetiner" cepa="Malbec" año="2008"/>
      <Card marca="Salentein" cepa="Cabernet Saugvinon" año="2020"/>
    </div>
  );
}

export default App;



