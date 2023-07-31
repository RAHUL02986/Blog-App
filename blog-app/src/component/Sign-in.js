import React from "react";
import { signupURL } from "../utils/constant";
import validate from "../utils/validate";
import { NavLink } from "react-router-dom";


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            errors: {
              username: "",
              email: "",
              password: "",
            },
          };
      
    }
    handleChange = (event) => {
        let { name, value } = event.target;
        let errors = { ...this.state.errors };
    
        validate(name, value, errors);
    
        this.setState({ [name]: value, errors });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        const { username, email, password } = this.state;
        const { navigate } = this.props;
        fetch(signupURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: { username, email, password } }),
        })
          .then((res) => {
            if (!res.ok) {
              return res.json().then(({ errors }) => {
                return Promise.reject(errors);
              });
            }
            return res.json();
          })
          .then(({ user }) => {
            this.props.updateUser(user);
            this.setState({ username: "", email: "", password: "" });
            navigate("/");
          })
          .catch((errors) => this.setState({ errors }));
      };
        render(){
            let { username, email, password } = this.state;

        console.log(this.state.username)
        return<>

        <div className="center">
            <form onSubmit={this.handleSubmit} className="sign-div">
                <h4>Sign-Up</h4>
                <a href="/login"><h5 className="h5">Have an account ?</h5></a>
                <hr/>
                <label htmlFor="username">UserName : </label>
                <input type="text" onChange={this.handleChange} value={username}  name="username" placeholder="Enter UserName" />
                               <label htmlFor="email">Email : </label>
                <input type="email" value={email} onChange={this.handleChange} name="email" placeholder="Enter Your Email"/>
                <label htmlFor="password">Password : </label>
                <input type="password" value={password} onChange={this.handleChange} name="password" placeholder="Enter Your Password"/>
              <NavLink to='/login'>  <button className="button-1">Sign Up</button></NavLink>

            </form>
        </div>
        </>
    }
}

export default SignIn;