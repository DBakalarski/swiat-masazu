import React, { Component } from 'react';
import styles from './Location.module.scss'
import ClientCard from '../ClientCard/ClientCard'
import pinImage from '../../images/pin2.svg'
import VisibilitySensor from 'react-visibility-sensor';


class Location extends Component {
    state = {
        visible: false
    }
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({
                visible: true
            })
        }
    }
    render() {
        const { location, locationShow, locationHide, location_container, header, separator, address, button, image_container, button_text } = styles;
        return (
            <VisibilitySensor
                onChange={this.onVisibilityChange}
                delayedCall
                minTopValue={this.props.width > 968 ? 300 : 100}
                partialVisibility
            >
                <section id="lokalizacja" className={location}>
                    <div className={this.state.visible ? `${locationHide} ${locationShow} ` : locationHide}>
                        <div className="container">
                            <div className={location_container}>
                                <div className={header}>Lokalizacja<span className={separator}></span></div>
                                <div className={address}>ul. Piątkowska 186</div>
                                <div className={button}>
                                    <div className={image_container}>
                                        <img src={pinImage} alt="googlemaps" />
                                    </div>
                                    <a className={button_text} href="https://www.google.com/maps/place/Biuro,+Pi%C4%85tkowska+186,+61-693+Pozna%C5%84/@52.4396332,16.9120127,19z/data=!4m5!3m4!1s0x4704435a0972cca9:0x1bd460d80b81d5fa!8m2!3d52.439693!4d16.9123378?hl=pl-PL" target="_blank" rel="noopener noreferrer" >
                                        Zobacz w google maps
                        </a>
                                </div>
                            </div>
                            <ClientCard />

                        </div>
                    </div>

                </section >
            </VisibilitySensor>
        )
    }
}


export default Location;