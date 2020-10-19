import React, { Component } from 'react';
import firebaseDB from '../js/firebase.js';

 class SignIn extends Component {
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
        firebaseDB.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            console.log('there seems an error:', error);
          })
    }

    render() {
        return (
            <div>
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
                    value='Login'
                    onClick={this.handleSubmit}
                />
               this is signIn page 

            </div>
        )
    }
}

export default SignIn;
