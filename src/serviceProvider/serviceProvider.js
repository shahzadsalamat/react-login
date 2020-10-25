import React, { useState, useEffect } from 'react';
import firebaseDB from '../js/firebase.js';
import App from '../App.js';
import { BrowserRouter as Router } from "react-router-dom";

export const UserLoginStatus = React.createContext('');

const ServiceProvider = () => {
    const [user, setUser] = useState('');
    
    useEffect(() => {
        firebaseDB.auth().onAuthStateChanged((userStatus) => {
            setUser(userStatus);
        });
    }, []);

    return (
        <div>
            <Router>
                <UserLoginStatus.Provider value={user}>
                    <App />
                </UserLoginStatus.Provider>
            </Router>
        </div>
    )

}

export default ServiceProvider;
