import React from 'react';
import './Person.css';

const Person =  (props) => {
    return (
        <div className="person">
            <h1>Hello, i'm a {props.name}</h1>
            <h2>This is my information</h2>
            <label for="name">Name:</label>
            <input type="text" value="prueba"/>
            <label for="id">Id Number:</label>
            <input type="number" value="123"/>
            <label for="age">Age:</label>
            <input type="text" value="prueba_age"/>
        </div>
    )

}
export default Person