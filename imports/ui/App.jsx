import React, { Component } from 'react';

import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';

import Welcome from './Welcome.jsx';
import Signup from './Signup.jsx';
import SignIn from './Signin.jsx';
import Matches from './Matches.jsx';
import Profile from './Profile.jsx';
import Preferences from './Preferences.jsx';
import Lists from './Lists.jsx';
import Chat from './Chat.jsx';
import NotFound from './Notfound.jsx';


const history = createBrowserHistory();

class App  extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={Signup} />
          <Route path="/matches" component={Matches} />
          <Route path="/profile" component={Profile} />
          <Route path="/edit-preferences" component={Preferences} />
          <Route path="/student-list" component={Lists} />
          <Route path="/chat" component={Chat} />
          <Route component={NotFound} />  
        </Switch>
      </Router>
    );
  }
}
  


export default App;
