import React, { Component } from 'react';
import firebaseDB from '../js/firebase.js';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                email: '',
                password: ''
            },
            errorMessage: ''
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            user: {
                ...this.state.user,
                [name]: value,
            }

        })
    }

    handleSubmit = () => {
        const email = this.state.user.email;
        const password = this.state.user.password;
        firebaseDB.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                // console.log('login was success')
                this.props.history.replace('../react-login')
            })
            .catch((error) => {
                this.setState({
                    errorMessage: error.message
                })
            })
    }

    render() {
        return (
            <div className='container'>
                <div className='container-left'>
                    <h3>React and firebase project for Login</h3>
                    <h1>Sign In!</h1>
                </div>
                <div className='container-right'>
                    <div className='signIn-form'>
                        {(this.state.errorMessage) ? <p className='error-message'>{this.state.errorMessage}</p> : <p>Please enter your email and password!</p>}
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            value={this.state.user.email}
                            placeholder='enter your email'
                            onChange={this.handleChange}
                        />
                        <input
                            className='form-input'
                            type='password'
                            name='password'
                            value={this.state.user.password}
                            placeholder='enter your password'
                            onChange={this.handleChange}
                        />
                        <input
                            className='form-button'
                            type='button'
                            value='Login'
                            onClick={this.handleSubmit}
                        />
                        <Link to="/react-login/components/forgotPassword.js"><p>forgot password</p></Link>
                        <p>New here! create new user, <Link to="/react-login/components/signUp.js">SignUp</Link> here </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;
