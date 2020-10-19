import React, { useState, useEffect } from 'react';
import firebaseDB from '../js/firebase.js';
import App from '../App.js';
import Welcome from '../components/welcome';
import { BrowserRouter as Router } from "react-router-dom";


export const UserLoginStatus = React.createContext('some');

const ServiceProvider = (props) => {

    const [user, setUser] = useState('');
    

    useEffect(() => {
        firebaseDB.auth().onAuthStateChanged((userStatus) => {
            /**if (user) {
                console.log('user exist');
            } else {
              console.log('user logged out');
            }**/
            setUser(userStatus);
          });
       
      }, [user]);


      return (
        <div>
            <Router>
                <UserLoginStatus.Provider value={user}>
                    <App />
                    <Welcome />
                </UserLoginStatus.Provider>
            </Router>
        </div>
    )



    }



        

 
export default ServiceProvider;
