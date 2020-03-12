import React, { Component } from 'react';

import './App.scss';
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <Nav /> */}
      </React.Fragment>
    )

  }
}

export default App;
