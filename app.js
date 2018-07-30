import React, { Component } from 'react';
import './app.css';
import Person from './Person/Person';

export class App extends Component {
    render(){
        return (
            <div className = "App">
                <h1>Hi, I'm a React App</h1>
                <p> This is really working!</p>
                <Person name = "Max" age = "28" />
                <Person name = "Manu" age = "29" > My Hobbies: Racing </Person>
                <Person name = "Stephanie" age = "26" />

            </div>
        )
    }
    
}


