import React from 'react';
import ReactDOM from  'react-dom';
import { App } from './app.js'


class Something extends React.Component{
    render(){
        return(
            <App />
        )
    }
}


ReactDOM.render(<Something />, document.getElementById('root'));