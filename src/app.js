import React, { Component } from 'react';
import './app.css';
import Person from './Person/Person';
//import './Person/Person.css'

export class App extends Component {
    state = {
        persons: [
            {id: "awaf", name: "Max", age: 28},
            {id: "af", name: "Manu", age: 29},
            {id: "awf", name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    }
    


    nameChangedHandler = (event, id) => {

        // good to not mutate the state directly  
        const personIndex = this.state.persons.findIndex(p =>{
            return p.id === id;
        });
        
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState ({persons: persons})
    }


    deletePersonHandler = (personIndex) => {
        //const persons2 = this.state.persons.slice();
        const persons2 = [...this.state.persons];
        persons2.splice(personIndex,1);
        this.setState({persons: persons2})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});

    }

    render(){
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: '1px solid blue',
            padding: "8px",
            cursor: 'pointer'
        };

        let persons = null;

        if(this.state.showPersons){
            persons = ( 
                <div> 
                    {this.state.persons.map((person, index) => {
                        return <Person 
                        click = {() =>this.deletePersonHandler(index)}
                        name = {person.name}
                        age = {person.age}
                        key ={person.id} 
                        changed = {(event) => this.nameChangedHandler(event,person.id)}/>
                        
                    })}

                </div>
            )


        }


        return (
            <div className = "App">
                <h1>Hi, I'm a React App</h1>
                <p> This is really working!</p>
                <button 
                style = {style}
                onClick = {this.togglePersonsHandler}>Switch Name</button>
                {persons}
            </div>
        )
    }
    
}
/*
                    <Person 
                    name = {this.state.persons[0].name} 
                    age = {this.state.persons[0].age} />
                    <Person 
                    name = {this.state.persons[1].name} 
                    age = {this.state.persons[1].age}
                    click = {this.switchNameHandler.bind(this,"fuckyfucky")}
                    changed = {this.nameChangedHandler }  > My Hobbies: Racing </Person>
                    <Person 
                    name = {this.state.persons[2].name} 
                    age = {this.state.persons[2].age}  />

*/