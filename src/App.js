import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
  state = {
    persons: [
      {id: 'k1' ,name: 'Max', age: 28 },
      {id: 'k2' ,name: 'Manu', age: 29 },
      {id: 'k3' ,name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false 
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        {name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event,person_id) => {
    console.log(1);
    //Buscamos el index de la persona a editar
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === person_id;
    })
    //Creamos un objeto con los datos de esa persona
    const person = {
      ...this.state.persons[personIndex]
    }
    //Le asignamos el nuevo valor al objeto temporal 
    person.name = event.target.value;
    //Creamos una copia de la lista de personas
    const persons = [...this.state.persons];
    //Modificamos la persona en el arreglo con el objeto temporal
    persons[personIndex] = person;
    //Actualizamos el estado con el valor de la persona ya editada
    this.setState({
      persons: persons
    })
  }


  //Handler para mostrar las personas y ocultarlas
  showPersonsHandler = () => {
    const actual_state = this.state.showPersons;
    this.setState ({
     showPersons: !actual_state 
    });
  }

  //Handler para eliminar un item de la lista personas
  deletePersonHandler = (index) => {
    //Bad practice 
    //const persons = this.state.persons;
    //good practice
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({
      persons: persons
    })
  }
  render () {
    /**
     * Segunda manera de condicionar y hacer el contenido dinamico.
     */
    //Se define el estilo para el boton show persons
    const showPersonStyles = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      cursor: 'pointer',
      border: '1px solid blue',
      padding: '8px',
      // Al incorporar radium al proyecto podemos usar pseudo selectos y media querys css en los componentes.
      // de la siguiente manera.
      ':hover': {
        backgroundColor: 'yellow',
        color: 'black'
      }
    }
    //Cambio de estilos dinamicamente con clases.
    const classes = [];
    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          {
            /**
            * Renderizando dinamicamente el contenido del arreglo. 
            */
            this.state.persons.map( (person,index) => {
              return <Person
                click= {()=> this.deletePersonHandler(index)}
                name= {person.name}
                age= {person.age}
                key= {person.id}
                changed={(event) => this.nameChangedHandler(event,person.id)}
                />
            })
          }
        </div>
      )
        //Cambiamos el valor del objeto showPersonStyles, con la finalidad de que el boton se muestre
        //rojo y verde dependiendo si se van a mostrar u ocultar las personas
        showPersonStyles.backgroundColor ="red";
        //Cambiamos el estilo del pseudo selector, como es un string tenemos que poner ['pseudo_selector'] para acceder a el
        showPersonStyles[':hover'] = {
          backgroundColor: 'blue',
          color: 'white',
        }
    }

    //Dependiendo de cuantas personas hay se le insertan las clases al arreglo classes.
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App Udemy Course</h1>
        {/* Se hace un join al arreglo clases para que quede asi -> clase1 clase2 */}
        <p className={classes.join(" ")}>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <button style={showPersonStyles} onClick={this.showPersonsHandler}>Show Persons</button>
        {
          //Segunda manera de condicionar el contenido
          persons
          /** 
           *Condicion que verifica si se deben o no mostrar las personas
           *Tipo de condiciones 1-> usando expresiones terninarias 
          this.state.showPersons ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Max!')}
                changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
            </div>
          :null
          */
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
