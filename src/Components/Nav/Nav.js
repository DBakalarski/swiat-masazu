import React, { Component } from 'react';
import styles from './Nav.module.scss';
import facebookImage from '../../images/facebook.svg';
import arrowImage from '../../images/arrow.svg';
import mailImage from '../../images/mail.svg';
import phoneImage from '../../images/phone.svg';

class Nav extends Component {
    state = {
        animation: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ animation: true })
        }, 100)
    }
    render() {
        const { fixedFooter, fixedFooterAniamtion, fixedFooter_container, facebok_container, backOnTop, contact, arrow } = styles
        return (
            <div className={this.state.animation ? `${fixedFooter} ${fixedFooterAniamtion} ` : fixedFooter}>
                <div className="container">
                    <div className={fixedFooter_container}>
                        <a href="https://www.facebook.com/kswiatmasazu/" target="_blank" rel="noopener noreferrer">
                            <div className={facebok_container}>
                                <img src={facebookImage} alt="facebook" />
                                <p>facebook</p>
                            </div>
                        </a>
                        <a href="/#header">
                            <div className={backOnTop}>
                                <div className={arrow}>
                                    <img src={arrowImage} alt="strzałka" />
                                </div>
                                <p>wracam na górę</p>
                            </div>
                        </a>
                        <div className={contact}>
                            <a href="mailto:klausiaswiatmasaz@gmail.com"> <img src={mailImage} alt="mail" /></a>
                            <a href="tel:+48881288255"><img src={phoneImage} alt="telefon" /></a>
                            <p>kontakt</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Nav;