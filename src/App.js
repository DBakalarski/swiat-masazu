import React, { Component } from 'react';

import './App.scss';
import Header from './Components/Header/Header'
import Pricing from './Components/Pricing/Pricing'
import OfficeOffer from './Components/OfficeOffer/OfficeOffer'
import PregnantOffer from './Components/PregnantOffer/PregnantOffer'
import Location from './Components/Location/Location'
import Social from './Components/Social/Social'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <Pricing />
        <OfficeOffer />
        <PregnantOffer />
        <Location />
        <Social />
        <Footer />
        {/* <Nav /> */}
      </React.Fragment>
    )

  }
}

export default App;
