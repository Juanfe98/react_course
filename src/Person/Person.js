import React from 'react';
import Radium from 'radium';
//Los css se deben importar donde se van a utilizar
import './Person.css';
const person = (props) => {
  //Usando media querys con Radium
  const personStyle = {
    '@media (min-width: 500px)': {
      width: '450px',
    },
  };
  return (
    <div className="person" style={personStyle}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
