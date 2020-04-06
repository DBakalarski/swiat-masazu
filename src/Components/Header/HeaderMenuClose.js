import React from 'react';
import logoImage from '../../images/logo.svg'
import checkImage from '../../images/check.svg'
import pinImage from '../../images/pin.svg'
import burgerMenu from '../../images/hamburger_menu.svg'
import signImage from '../../images/sign.svg'
import styles from './HeaderMenuClose.module.scss'

const HeaderMenuClose = (props) => {
    const { header_container, header_menu, logo, nav, nav_item, description, main_description, separator, additional_description, sign } = styles
    return (
        <div className={header_container}>
            <div className={header_menu}>

                <div className={logo}>
                    <img src={logoImage} alt="logo" />
                </div>
                <div className={nav}>
                    <a href="/#rezerwacja" className={nav_item}>
                        <img src={checkImage} alt="rezerwacja" />
                        <p>Rezerwacja</p>
                    </a>
                    <a href="/#lokalizacja" className={nav_item}>
                        <img src={pinImage} alt="lokalizacja" />
                        <p>Lokalizacja</p>
                    </a>
                    <div onClick={props.click} className={nav_item}>
                        <img src={burgerMenu} alt="menu" />
                        <p>Menu</p>
                    </div>
                </div>
            </div>
            <div className={description}>
                <div className={main_description}>
                    <h1>Masaż jest najlepszą formą relaksu dla ciała i duszy</h1>
                    <span className={separator}></span>
                </div>
                <div className={additional_description}>
                    <h2>Specjalizuję się w masażach klasycznych i leczniczych.</h2>
                </div>
                <div className={sign}>
                    <img src={signImage} alt="podpis" />
                </div>
            </div>
        </div>
    );
}

export default HeaderMenuClose;