import React from 'react';
import styles from './Header.module.scss'
import Slider from './Slider'
import logoImage from '../../images/logo.svg'
import checkImage from '../../images/check.svg'
import pinImage from '../../images/pin.svg'
import burgerMenu from '../../images/hamburger_menu.svg'
import signImage from '../../images/sign.svg'

const Header = () => {
    const { header, header_menu, logo, nav, nav_item, description, main_description, separator, additional_description, sign, header_content } = styles
    return (
        <section className={header}>
            <div className="container">
                <div className={header_content}>
                    <div>
                        <div className={header_menu}>

                            <div className={logo}>
                                <img src={logoImage} alt="logo" />
                            </div>
                            <div className={nav}>
                                <div className={nav_item}>
                                    <img src={checkImage} alt="rezerwacja" />
                                    <p>Rezerwacja</p>
                                </div>
                                <div className={nav_item}>
                                    <img src={pinImage} alt="lokalizacja" />
                                    <p>Lokalizacja</p>
                                </div>
                                <div className={nav_item}>
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

                    <Slider />
                </div>
            </div>
        </section >
    )
}

export default Header;