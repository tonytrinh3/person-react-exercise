import React from 'react';
import ReactDOM from  'react-dom';

export class Fizzbuzz extends React.Component{

    render(){
        
        let word = [];

        for (let i = 1; i <=100; i++){
            if (i % 3 === 0 ){
                word[i] = "fizz, ";
            } else if (i % 5 ===0 ) {
                word[i] = "buzz, ";
            } else{
                word[i] = i + ', ';
            }

        }

        

        return(
            <div>
                <h1>{word}</h1>
            </div>

        )
    }

}