import React, { useContext } from 'react';
import SignUp from './components/signUp.js';
import SignIn from './components/signIn.js';
import Welcome from './components/welcome.js';
import ForgotPassword from './components/forgotPassword.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserLoginStatus } from './serviceProvider/serviceProvider.js'
import AddProfile from './components/addProfile.js';
import './css/style.css';

const App = () => {

  const UserData = useContext(UserLoginStatus);

  return (
    <Router>
      <div>
        {
          (UserData) ?
            <div>
              <Switch>
                <Route exact path='/'><Welcome /></Route>
                <Route path='/components/addProfile.js' component={AddProfile} />

              </Switch>
            </div>
            :
            <div>
              <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path='/components/signUp.js' component={SignUp} />
                <Route path='/components/forgotPassword.js' component={ForgotPassword} />

              </Switch>
            </div>
        }
      </div>
    </Router>
  )

}

export default App;
