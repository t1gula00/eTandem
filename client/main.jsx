import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App';
import { MuiThemeProvider } from 'material-ui/styles';


Meteor.startup(() => {
  render(
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>,
    document.getElementById('react-target'));
});
