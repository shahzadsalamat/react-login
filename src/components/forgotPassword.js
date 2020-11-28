import React, {useState} from 'react';
import firebaseDB from '../js/firebase';

const ForgotPassword = () => {
    const [emailToSendEmail, setEmailToSendEmail] = useState('');
    
    const sendEmailResetPassword = () => {
        var auth = firebaseDB.auth();
        auth.sendPasswordResetEmail(emailToSendEmail).then(function () {
            alert('Email sent successfully')
        }).catch(function (error) {
            alert(error);
        });
    }
    return (
        <div>
            <div className='container-header'>
            </div>
            <div className='container-content'>
                  <p>Reset your password here</p>
                <div className='signIn-form'>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        value={emailToSendEmail}
                        placeholder='enter your email'
                        onChange={(e) => setEmailToSendEmail(e.target.value)}
                    />
                    <br />
                   
                    <input
                        className='form-button'
                        type='button'
                        value='send email'
                        onClick={sendEmailResetPassword}
                    />
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;