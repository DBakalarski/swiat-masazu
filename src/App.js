import React, { Component } from 'react';
import CookieConsent from "react-cookie-consent";

import './App.scss';
import Header from './Components/Header/Header'
import Pricing from './Components/Pricing/Pricing'
import OfficeOffer from './Components/OfficeOffer/OfficeOffer'
import PregnantOffer from './Components/PregnantOffer/PregnantOffer'
import Location from './Components/Location/Location'
import Social from './Components/Social/Social'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import PricingModal from './Components/Pricing/PricingModal'
import FooterSign from './Components/FooterSign/FooterSign'

class App extends Component {
  state = {
    menuOpen: false,
    width: window.innerWidth,
    scrollPosition: 0,
    modalVisible: false,
    offsetTopFooter: null,

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

  handleModalVisibity = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
      menuOpen: !this.state.menuOpen
    })

  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeScrollPosition);
    window.addEventListener('resize', this.changeWindowSize)
    this.setState({
      offsetTopFooter: document.querySelector('footer').offsetTop - document.querySelector('footer').offsetHeight
    })
  }

  componentDidUpdate() {
    if (this.state.menuOpen === true) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto"
  }


  render() {

    return (
      <React.Fragment>
        <Header
          click={this.changeMenuState}
          isMenuOpen={this.state.menuOpen}
          width={this.state.width}
        />
        <Pricing
          width={this.state.width}
          visible={this.state.visible}
          handleModalVisibity={this.handleModalVisibity}
          modalClick={this.changeMenuState}
        />
        {this.state.modalVisible ?
          <PricingModal
            visible={this.state.modalVisible}
            click={this.handleModalVisibity}
            width={this.state.width}
          />
          :
          null
        }

        <OfficeOffer
          width={this.state.width}
        />
        <PregnantOffer
          width={this.state.width}
        />
        <Location
          width={this.state.width}
        />

        <Social
          scroll={this.state.scrollPosition}
          width={this.state.width}
        />
        <Footer />
        {this.state.scrollPosition > 200 && this.state.scrollPosition < this.state.offsetTopFooter ? <Nav /> : null}
        <FooterSign />
        <CookieConsent
          location="bottom"
          buttonText="Rozumiem"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ backgroundColor: "#B69969", color: "#4e503b", fontSize: "13px" }}
          contentStyle={{ flex: "1 0 0" }}
        >
          Ta strona używa cookie
          <span style={{ display: "block", "padding-left": "5px", "font-size": "11px", "color": "#B69969" }}> <a href="https://wszystkoociasteczkach.pl/po-co-sa-ciasteczka" target="_blank" rel="noopener noreferrer">więcej informacji </a> </span> {" "}
        </CookieConsent>
      </React.Fragment>
    )

  }
}

export default App;
