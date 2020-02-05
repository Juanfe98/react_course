import React from 'react';
import './App.css';
//Componentes import
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Does this work?</h1>
      <Person name="Juan Felipe"/>
      <Person name= "Geraldine Chavez"/>
      <Person name= "Juan Nicolas"/>
    </div>
  );
}

export default App;
