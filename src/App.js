import React, { Component } from 'react';
import Main from './Components/Main';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
class App extends Component {
  render() {
    injectTapEventPlugin();
    return (
      <MuiThemeProvider>
        <Main/>
      </MuiThemeProvider>
    );
  }
}

export default App;
