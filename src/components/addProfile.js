import React, { useContext, useState } from 'react';
import { UserLoginStatus } from '../serviceProvider/serviceProvider.js'
import firebaseDB from '../js/firebase';
import { useHistory } from 'react-router-dom'

const AddProfile = () => {
    const userData = useContext(UserLoginStatus);
    const [displayName, setDisplayName] = useState(`${userData.displayName}`);
    const [photoURL, setPhotoURL] = useState('https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    const handleFileUploadChange = (e) => {
            setPhotoURL(e.target.files[0])
    }

    const handleSubmit = () => {
        firebaseDB.auth().currentUser.updateProfile({
            displayName: displayName,
        })
        .then(() => {
                firebaseDB.storage().ref(`images/${userData.uid}/profilePhoto`).put(photoURL)
                    .catch((error) => {
                        setErrorMessage(error.message);
                        console.log('error update name', error.message)
                    })
            })
        .catch((error) => {
                setErrorMessage(error.message);
                console.log('error update name', error.message);
            })
        .then(() => {
                history.replace('/')
            })
    }

    return (
        <div>
            <div className='container-header'>
                <p>{userData.email}</p>
            </div>
            <div className='container-content'>
                {(errorMessage) ? <p>{errorMessage}</p> : <p>Add your profile information here</p>}
                <div className='signIn-form'>
                    <input
                        className='form-input'
                        type='text'
                        name='displayName'
                        value={displayName}
                        placeholder='enter your name'
                        onChange={(e) => setDisplayName(e.target.value)}
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