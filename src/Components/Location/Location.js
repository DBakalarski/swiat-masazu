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
                        <div className={button_text}>
                            Zobacz w google maps
                        </div>
                    </div>
                </div>
                <ClientCard />
            </div>

        </section>
    );
}

export default Location;