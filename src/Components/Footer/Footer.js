import React from 'react';
import styles from './Footer.module.scss';
import arrowImage from '../../images/arrow.svg';
import facebookImage from '../../images/facebook.svg';
import mailImage from '../../images/mail.svg';
import phoneImage from '../../images/phone.svg';
import klaudiaPhoto from '../../images/klaudia_footerS.png';
import signImage from '../../images/sign-blue.svg';
import pinImage from '../../images/pin-blue.svg';


const Footer = () => {
    const { footer_container, footer, button, footer_text, footer_contact, facebook, loaction, phone, mail, footer_short, title, separator, footer_image, photo, sign } = styles;
    return (
        <footer>
            <div className="container">
                <div className={footer}>
                    <a href="#strona-glowna">
                        <div className={button}>
                            <img src={arrowImage} alt="strzałka" />
                            <p>Na górę</p>
                        </div>
                    </a>
                    <div className={footer_container}>
                        <div className={footer_text}>
                            <div className={footer_contact}>
                                <a href="https://www.facebook.com/kswiatmasazu/" target="_blank" rel="noopener noreferrer"  >
                                    <div className={facebook}>
                                        <img src={facebookImage} alt="" />
                                        <p>facebook</p>
                                    </div>
                                </a>
                                <a href="https://www.google.com/maps/place/Pi%C4%85tkowska+181,+61-693+Pozna%C5%84/@52.4395412,16.9089483,17z/data=!3m1!4b1!4m5!3m4!1s0x4704435a1a2315f3:0x2a27fa51dc670bfb!8m2!3d52.439538!4d16.911137" target="_blank" rel="noopener noreferrer">
                                    <div className={loaction}>
                                        <img src={pinImage} alt="" />
                                        <p>ul. Piątkowska 186 <span>60-681 Poznań</span></p>
                                    </div>
                                </a>
                                <a href="tel:+48881288255">
                                    <div className={phone}>
                                        <img src={phoneImage} alt="" />
                                        <p>+48 881 288 255</p>
                                    </div>
                                </a>
                                <a href="mailto:klaudiaswiatmasazu@gmail.com">
                                    <div className={mail}>
                                        <img src={mailImage} alt="" />
                                        <p>klaudiaswiatmasazu@gmail.com</p>
                                    </div>
                                </a>
                            </div>
                            <div className={footer_short}>
                                <div className={title}>
                                    W skrócie <span className={separator}></span>
                                </div>
                                <a href="#cennik-uslug"><p>Cennik usług</p></a>
                                <a href="#oferta-dla-firm"><p>WorkSite</p></a>
                                <a href="#masaz-ciaza"><p>Kobieta w ciąży</p></a>
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