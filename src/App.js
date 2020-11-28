import React, { useContext } from 'react';
import SignUp from './components/signUp.js';
import SignIn from './components/signIn.js';
import Welcome from './components/welcome.js';
import ForgotPassword from './components/forgotPassword.js';
import PageNotFound from './components/pageNotFound.js';
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
                <Route exact path='/react-login'><Welcome /></Route>
                <Route path='/react-login/components/addProfile.js' component={AddProfile} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
            :
            <div>
              <Switch>
                <Route exact path='/react-login' component={SignIn} />
                <Route path='/react-login/components/signUp.js' component={SignUp} />
                <Route path='/react-login/components/forgotPassword.js' component={ForgotPassword} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
        }
      </div>
    </Router>
  )

}

export default App;
