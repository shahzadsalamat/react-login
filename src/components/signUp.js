import React, { Component } from 'react';
import firebaseDB from '../js/firebase.js';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                email: '',
                password: ''
            }
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            user:{
                ...this.state.user,
                [name]: value,
            }
            
        })
    }
    handleSubmit = () => {
        const email = this.state.user.email;
        const password = this.state.user.password;
        firebaseDB.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            console.log('there seems an error:', error);
          })
    }
    
    render() {
        return (
            <div>
                <h3> Create Your Account Here! </h3>
                <input
                    type='email'
                    name='email'
                    value={this.state.user.email}
                    placeholder='enter your email'
                    onChange={this.handleChange}
                />
                <input
                    type='password'
                    name='password'
                    value={this.state.user.password}
                    placeholder='enter your password'
                    onChange={this.handleChange}
                />
                <input
                    type='button'
                    value='Sign Up'
                    onClick={this.handleSubmit}
                />
                <p>Already a member, <Link to="/components/signIn.js">SignIn</Link> here </p>
            </div>
        )
    }
}
export default SignUp;
