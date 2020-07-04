import React from 'react';
//Los css se deben importar donde se van a utilizar
import './Person.css';
const person = ( props ) => {
    return (
        <div className="person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;