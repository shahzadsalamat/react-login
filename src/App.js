import React, { useState, useEffect, useContext } from 'react';
import SignUp from './components/signUp.js';
import SignIn from './components/signIn.js';
import Welcome from './components/welcome.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserLoginStatus } from './serviceProvider/serviceProvider.js'

const App = () => {

  const UserData = useContext(UserLoginStatus);

  return (
    <Router>
    <div>
      {
        (UserData) ?
      
            
           
          <div>
              <Switch>
               <Route exact path='/components/welcome.js'><Welcome/></Route>
               </Switch>
          </div>
          :
          <div>
           <Switch>
              <Route exact path='/' component={SignUp} />
              <Route path='/components/signIn.js' component={SignIn} />
              </Switch>
              </div> 
      }
    </div>
    </Router>
  )

}

export default App;
