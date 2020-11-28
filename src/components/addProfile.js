import React, { useContext, useState } from 'react';
import { UserLoginStatus } from '../serviceProvider/serviceProvider.js'
import firebaseDB from '../js/firebase';
import { useHistory } from 'react-router-dom'

const AddProfile = () => {
    const userData = useContext(UserLoginStatus);
    const [user, setUser] = useState({
        displayName: userData.displayName,
        photoURL: userData.photoURL
    });
    const [photoURL, setPhotoURL] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    const handleFileUploadChange = (e) => {
        setPhotoURL(e.target.files[0])
    }

    const handleSubmit = () => {
        // console.log('add profile page:::', user.displayName);
        firebaseDB.auth().currentUser.updateProfile({
            displayName: user.displayName,
        }).then(() => {
            firebaseDB.storage().ref(`images/${userData.uid}/profilePhoto`).put(photoURL)
                .catch((error) => {
                    setErrorMessage(error.message);
                    console.log('error update name', error.message)
                })
        })
            .catch((error) => {
                setErrorMessage(error.message);
                // console.log('error update name', error.message);
            })
            .then(() => {
                history.replace('/react-login')
            })
    }

    return (
        <div>
            <div className='container-header'>
                <h1>Edit your profile here</h1>
            </div>
            <div className='container-content'>
                {(errorMessage) ? <p>{errorMessage}</p> : <p>Add your profile information here</p>}
                <div className='signIn-form'>
                    <input
                        className='form-input'
                        type='text'
                        name='displayName'
                        value={user.displayName ? user.displayName : ''}
                        placeholder='enter you name'
                        onChange={(e) => setUser({
                            [e.target.name]: e.target.value,
                        })}
                    />
                    <br />
                    <input
                        className='form-input'
                        type='file'
                        id='photoUrl'
                        onChange={handleFileUploadChange}
                    />
                    <input
                        className='form-button'
                        type='button'
                        value='submit'
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </div>
    )
}

export default AddProfile;