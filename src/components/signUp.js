import React, { Component } from 'react';
import firebaseDB from '../js/firebase.js';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                email: '',
                password: '',
                confirmPassword: ''
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
        const confirmPassword = this.state.user.confirmPassword;
        if (password === confirmPassword) {
            firebaseDB.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    // console.log('sucess message');
                    this.props.history.replace('../react-login')
                })
                .catch((error) => {
                    this.setState({
                        errorMessage: error.message
                    })
                })
        }
        else {
            this.setState({
                errorMessage: "Passwords don't match"
            })
        }

    }

    render() {
        return (
            <div className='container'>
                <div className='container-left'>
                    <h3>React and firebase project for Login</h3>
                    <h1>Sign Up!</h1>
                </div>
                <div className='container-right'>
                    <div className='signIn-form'>
                        <h3> Create Your Account Here! </h3>
                        {(this.state.errorMessage) ? <p className='error-message'>{this.state.errorMessage}</p> : <p>Please fill the signUp form</p>}
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
                            className='form-input'
                            type='password'
                            name='confirmPassword'
                            value={this.state.user.confirmPassword}
                            placeholder='re-enter your password'
                            onChange={this.handleChange}
                        />
                        <input
                            className='form-button'
                            type='button'
                            value='Create new account'
                            onClick={this.handleSubmit}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUp;
