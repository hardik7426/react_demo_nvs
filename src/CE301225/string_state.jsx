import React , {Component} from "react";
class StringState extends Component{

    constructor(){
        super();
        this.state={
            name : "",
            email : "",
            age : "",
        };
    }
    handNameChane = (e) => {
        this.setState({name: e.target.value});
    };
    handEmailChange = (e) => {
        this.setState({email: e.target.value});
    };
    handAgechange = (e) => {
        this.setState({age: e.target.value});
    };
    consolelog = () => {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.age);
    }
    render(){
        const {name , email , age} = this.state;
        return(
            <>
            <input type="text"
            value={name}
            onChange={this.handleNameChange}/>
            <input type="text"
            value={email}
            onChange={this.handleEmailChange}/>
            <input type="text"
            value={age}
            onChange={this.handleAgeChange}/>
            <button onClick={this.consolelog}>
                Click Me</button>
            <h2>Name : {name}</h2>
            <h2>Email : {email}</h2>
            <h2>Age : {age}</h2>
            </>
        )
    }
}
export default StringState;
