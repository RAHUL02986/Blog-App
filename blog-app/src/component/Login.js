import React from "react";
import { NavLink } from "react-router-dom";
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={}

    }
    render(){
        return<div className="center">
        
        <div className="sign-div">


        <form>
            <h4>Login -Form</h4>
            <hr/>
            <label htmlFor="email">Email : </label>
            <input type="email" value={this.props.email} placeholder="Enter Your email" name="email"/>
            <label htmlFor="password">Password : </label>
            <input type="password" value={this.props.email} placeholder="Enter Password" name="password"/>
               
               <NavLink to='/read/more'><button className="button-1">Login</button></NavLink>

            <h6>sign-up first <span><a href="/signup">Sign-up</a></span></h6>
        </form>
        </div>
        </div>
    }
}
export default Login;