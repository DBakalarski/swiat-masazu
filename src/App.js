import React, { Component } from 'react';

import './App.scss';
import Header from './Components/Header/Header'
import Pricing from './Components/Pricing/Pricing'
import OfficeOffer from './Components/OfficeOffer/OfficeOffer'
import Nav from './Components/Nav/Nav'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <Pricing />
        <OfficeOffer />
        {/* <Nav /> */}
      </React.Fragment>
    )

  }
}

export default App;
