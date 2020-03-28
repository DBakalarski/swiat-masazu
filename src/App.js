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
  state = {
    menuOpen: false,
    scrollPosition: 0
  }

  changeMenuState = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  changeScrollPosition = () => {
    this.setState({
      scrollPosition: window.scrollY
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeScrollPosition);
  }

  render() {
    return (
      <React.Fragment>
        <Header
          click={this.changeMenuState}
          isMenuOpen={this.state.menuOpen}
        />
        <Pricing />
        <OfficeOffer />
        <PregnantOffer />
        <Location />
        <Social />
        <Footer />
        {this.state.scrollPosition > 100 ? <Nav /> : null}

      </React.Fragment>
    )

  }
}

export default App;
