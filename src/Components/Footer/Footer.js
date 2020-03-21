import React from 'react';
import styles from './Footer.module.scss';
import arrowImage from '../../images/arrow.svg';
import facebookImage from '../../images/facebook.svg';
import mailImage from '../../images/mail.svg';
import phoneImage from '../../images/phone.svg';
import klaudiaPhoto from '../../images/klaudia_footerS.png';
import signImage from '../../images/sign-blue.svg';


const Footer = () => {
    const { footer_container, footer, button, footer_text, footer_contact, facebook, loaction, phone, mail, footer_short, title, separator, footer_image, photo, sign } = styles;
    return (
        <footer >
            <div className="container">
                <div className={footer}>
                    <div className={button}>
                        <img src={arrowImage} alt="strzałka" />
                        <p>Na górę</p>
                    </div>
                    <div className={footer_container}>
                        <div className={footer_text}>
                            <div className={footer_contact}>
                                <div className={facebook}>
                                    <img src={facebookImage} alt="" />
                                    <p>facebbok</p>
                                </div>
                                <div className={loaction}>
                                    <img src="" alt="" />
                                    <p>ul. Piątkowska 181 <span>60-681 Poznań</span></p>
                                </div>
                                <div className={phone}>
                                    <img src={phoneImage} alt="" />
                                    <p>+48 881 288 255</p>
                                </div>
                                <div className={mail}>
                                    <img src={mailImage} alt="" />
                                    <p>klaudiaswiatmasaz@gmail.com</p>
                                </div>
                            </div>
                            <div className={footer_short}>
                                <div className={title}>
                                    W skrócie <span className={separator}></span>
                                </div>
                                <p>Zakres usług</p>
                                <p>WorkSite</p>
                                <p>Cennik usług</p>
                                <p>Cennik usług - kobieta w ciązy</p>
                            </div>
                        </div>
                        <div className={footer_image}>
                            <img className={photo} src={klaudiaPhoto} alt="" />
                            <img className={sign} src={signImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;