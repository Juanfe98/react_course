import React from 'react';
import Radium from 'radium';
import StyledComponent from 'styled-components';
//Los css se deben importar donde se van a utilizar
//import './Person.css';

// Usando la libreria styled-components estamos creando un nuevo componente llamado StylesDiv
// al cual le estamos asignando los estilos entre las ``, en el return usamos el componente
// que estamos creando y asignandole los estilos StyledDiv
const StyledDiv = StyledComponent.div`
    border: 2px solid #fff;
    padding: 2%;
    box-shadow: 0 2px 2px;
    width: 30%;
    margin:16px auto;
    border-radius: 15px;

    '@media (min-width: 500px)': {
        width: '450px'
    }
`;
const person = (props) => {
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default Radium(person);
