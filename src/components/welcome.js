import React, { useContext } from 'react'
import firebaseDB from '../js/firebase';
import { UserLoginStatus } from '../serviceProvider/serviceProvider.js';
import { useHistory } from 'react-router-dom';


const Welcome = () => {
    const UserData = useContext(UserLoginStatus);
    const history = useHistory();
    const userSignOut = () => {
    firebaseDB.auth().signOut();
    history.replace('/components/signIn.js');
}
  
    return (
        <div>
            <h3>Welome {UserData.email} to your HomePage</h3>

            <input
                type='button'
                value='logout'
                onClick={userSignOut}
            />
        </div>
    )
}

export default Welcome;
