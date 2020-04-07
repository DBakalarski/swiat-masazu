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
import VisibilitySensor from 'react-visibility-sensor';

class App extends Component {
  state = {
    menuOpen: false,
    width: window.innerWidth,
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

  changeWindowSize = () => {
    this.setState({
      width: window.innerWidth,
    })
  }

  componentDidMount() {

    window.addEventListener('scroll', this.changeScrollPosition);
    window.addEventListener('resize', this.changeWindowSize)
  }

  componentDidUpdate() {
    if (this.state.menuOpen === true) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto"
  }
  // onVisibilityChange = isVisible => {
  //   if (isVisible) {
  //     this.setState({
  //       locationVisible: true
  //     })
  //   }
  // }
  render() {

    return (
      <React.Fragment>
        <Header
          click={this.changeMenuState}
          isMenuOpen={this.state.menuOpen}
          width={this.state.width}
        />
        <Pricing />
        <OfficeOffer />
        <PregnantOffer />
        <Location />

        <Social
          scroll={this.state.scrollPosition}
        />
        <Footer />
        {this.state.scrollPosition > 100 ? <Nav /> : null}

      </React.Fragment>
    )

  }
}

export default App;
