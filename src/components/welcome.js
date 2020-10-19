import React, { useContext } from 'react'
import firebaseDB from '../js/firebase';
import { UserLoginStatus } from '../serviceProvider/serviceProvider.js'

const UserData = useContext(UserLoginStatus);


const Welcome = () => {

  /***  handleLogout = () => {
        firebaseDB.auth().signOut();
    }  */

    return (
        <div>
            <h3>Welome {UserData.email} to your HomePage</h3>
            <input
                type='button'
                value='logout'
                onClick={this.handleLogout}
            />
        </div>
    )
}

export default Welcome;
