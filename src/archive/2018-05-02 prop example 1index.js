import React from 'react';
import ReactDOM from  'react-dom';
/*
import { Button } from "./prop example.js";
*/
import "./index css.css";

/*
class Greeting extends React.Component{
    render(){
        return(
            <div>
                <Word firstName = 'Cathy' />
                <h1>Hi there, {this.props.lastName}!</h1>
            </div>
        )
    }

}
ReactDOM.render(<Greeting lastName = 'Tony' />,document.getElementById('root'));
*/
/*
class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button fuck={this.handleClick}/>;
  }
}
ReactDOM.render(
  <Talker />,
  document.getElementById('root')
);
*/
/*
class Something extends React.Component{
    bitch(){
        alert('Gay!');
    }
    
    render(){
        return(
            <div>
                <Button fuck = {this.bitch}/>
            </div>
        )
    }

}
*/

class Something extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: "awefawefawefawef"};
        this.changeShit = this.changeShit.bind(this);
    }

    changeShit(){
            this.setState({title:'gay'});
    }

    render(){
        return(
            <div>
             <h1>{this.state.title}</h1>
             <button onClick = {this.changeShit}>press me hoe</button>
            </div>
        )
    }

}

ReactDOM.render(<Something />, document.getElementById('root'));