import React from 'react';
import styles from './Location.module.scss'
import ClientCard from '../ClientCard/ClientCard'
import pinImage from '../../images/pin2.svg'


const Location = () => {
    const { location, location_container, header, separator, address, button, image_container, button_text } = styles;
    return (
        <section id="lokalizacja" className={location}>
            <div className="container">
                <div className={location_container}>
                    <div className={header}>Lokalizacja<span className={separator}></span></div>
                    <div className={address}>ul. Piątkowska 181</div>
                    <div className={button}>
                        <div className={image_container}>
                            <img src={pinImage} alt="googlemaps" />
                        </div>
                        <a href="https://www.google.com/maps/place/Pi%C4%85tkowska+181,+61-693+Pozna%C5%84/@52.4395412,16.9089483,17z/data=!3m1!4b1!4m5!3m4!1s0x4704435a1a2315f3:0x2a27fa51dc670bfb!8m2!3d52.439538!4d16.911137" className={button_text}>
                            Zobacz w google maps
                        </a>
                    </div>
                </div>
                <ClientCard />
            </div>

        </section>
    );
}

export default Location;