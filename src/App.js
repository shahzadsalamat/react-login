import React, { useState, useEffect, useContext } from 'react';
import SignUp from './components/signUp.js';
import SignIn from './components/signIn.js';
import Welcome from './components/welcome.js';
import { Switch, Route } from "react-router-dom";
import { UserLoginStatus } from './serviceProvider/serviceProvider.js'

const App = () => {

  const [user, setUser] = useState('soomething');
  const UserData = useContext(UserLoginStatus);

  useEffect(() => {
    setUser(UserData);
    console.log('useeffect app:', user)
  }, [user, UserData]);

 

  return (
    <div>
      {
        
        (user) ?
          <Welcome />
          :
          <Switch>
            <Route exact path="/component/signIn.js">
              <SignIn />
            </Route>
            <Route exact path="/" >
              <SignUp />
            </Route>
          </Switch>
      }
    {console.log('user exist:', user)}
    </div>
  )




}
 

export default App;
