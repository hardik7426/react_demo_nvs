import React, {Component} from "react";

class RenderCond extends Component {
    constructor(props){
        super(props);
        this.state = {
            textcolor: "red",
            textcolor1: "blue",
            textcolor2: "green",
            textcolor3: "yellow",
        };
    }
    bgyellow = () => {
        this.setState({textcolor: "yellow"});
    }
    bggreen = () => {
        this.setState({textcolor1: "green"});
    }
    bgblue = () => {
        this.setState({textcolor2: "blue"});
    }
    bgred = () => {
        this.setState({textcolor3: "red"});
    }

    render(){
        return(
        <>
        <br>
        <button onClick={this.bgyellow}>Green</button>
        <button onClick={this.bgblue}>Blue</button>
        <button onClick={this.bgred}>Red</button>
        <button onClick={this.bgyellow}>Yellow</button>
        </br>
        <button>Green</button>
        <button>Blue</button>
        <button>Red</button>
        <button>Yellow</button>
        
        <p>sample text</p>
        </>
        )
    }
}
export default RenderCond;