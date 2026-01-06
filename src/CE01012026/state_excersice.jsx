import React,{Component} from "react";

class StateExample extends Component{
    constructor(){
        super();
        this.state={
        name:"",
        email:"",
        password:"",
        confirmpassword:"",
        gender:"",
        country:"",
        termsAccepted:false,
        
    };
    }
    handleNameChange=(e)=>{
        this.setState({name:e.target.value});
    };
    handleEmailChange=(e)=>{
        this.setState({email:e.target.value});
    };
    handlePasswordChange=(e)=>{
        this.setState({password:e.target.value});
    };
    handleConfirmPasswordChange=(e)=>{
        this.setState({confirmpassword:e.target.value});
    };
    handleGenderChange=(e)=>{
        this.setState({gender:e.target.value});
    };
    handleCountryChange=(e)=>{
        this.setState({country:e.target.value});
    };
    handleTermsChange=(e)=>{
        this.setState({termsAccepted:e.target.checked});
    }; 

    render(){
        return(
            <>
                <input type="text" placeholder="Enter your Name" value={this.state.name} onChange={this.handleNameChange}/>
                <br />
                <input type="email" placeholder="Enter your Email" value={this.state.email} onChange={this.handleEmailChange}/>
                <br />
                <input type="password" placeholder="Enter your Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                <br />
                <input type="password" placeholder="Confirm your Password" value={this.state.confirmpassword} onChange={this.handleConfirmPasswordChange}/>
                <br />
                <div onChange={this.handleGenderChange}>
                <input type="radio" name="gender" value="male   "/>Male
                <input type="radio" name="gender" value="female     "/>Female
                </div>
                <br />
                <select onChange={this.handleCountryChange}>
                    <option value="">Select Country</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                    <option value="australia">Australia</option>
                </select>
                <br />
                <input type="checkbox" onChange={this.handleTermsChange}/>I accept the terms and conditions
                <br />
                <h1>{this.state.name}</h1>
                <h1>{this.state.email}</h1>
                <h1>{this.state.gender}</h1>
                <h1>{this.state.country}</h1>



           
            </>
        );  
    }

}

export default StateExample;