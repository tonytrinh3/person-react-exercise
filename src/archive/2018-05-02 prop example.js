import React from 'react';

export class Another extends React.Component{
    render(){
        if (this.props.hoe + 1 === 8){
            return (
                <h1>suck my {this.props.hoe} inch dick </h1>
                );
        } else {
            return(
                <h1>suck my {this.props.hoe} inch vagina</h1>
                );
        }


    }
}