import React, { useContext, useState } from 'react'
import firebaseDB from '../js/firebase';
import { UserLoginStatus } from '../serviceProvider/serviceProvider.js';
import { Link, useHistory } from 'react-router-dom';


const Welcome = () => {
    const UserData = useContext(UserLoginStatus);
    const history = useHistory();
    const [photoURL, setPhotoURL] = useState('');

    const userSignOut = () => {
        firebaseDB.auth().signOut();
        history.replace('/');
    }

    const deleteUser = () => {
        var user = firebaseDB.auth().currentUser;
        user.delete().then(function () {
            alert('Your account deleted successfully')
        }).catch(function (error) {
            alert(error)
        });
        history.replace('/');
    }

    const profilePhoto = firebaseDB.storage().ref(`images/${UserData.uid}/profilePhoto`);
    profilePhoto.getDownloadURL()
        .then((url) => {
            if (url) {
                setPhotoURL(url);
                console.log('photoURL:', url)
            }
            else {
                setPhotoURL('');
            }
        })
        .catch((error) => {
            console.log('fetch photo failed:', error.message)
        })

    return (
        <div>
            <div className='container-header'>
                {(UserData.displayName) ?
                    <h3>Welome {UserData.displayName} to your HomePage</h3> :
                    <h3>Welome to your HomePage</h3>
                }
            </div>
            <div className='container-content'>
                <p>{UserData.displayName}</p>
                <p>{UserData.email}</p>
                <img src={photoURL ? photoURL : require('../images/user-icon.png')} alt="profile" width="100" height="100" />
                <p>{UserData.photoURL}</p>
                <p>{UserData.emailVerified}</p>
                {console.log(JSON.stringify(UserData))}
                <input
                    className='form-button'
                    type='button'
                    value='logout'
                    onClick={userSignOut}
                />
               
                <div className='delete-update-button-container'>

                <Link to='/components/addProfile.js'>
                    <input
                        className='form-button'
                        type='button'
                        value='update profile'
                    />
                </Link>

                <input
                    className='form-button delete-button'
                    type='button'
                    value='delete Account'
                    onClick={deleteUser}
                />

                </div>
               
               
            </div>
        </div>
    )
}

export default Welcome;
