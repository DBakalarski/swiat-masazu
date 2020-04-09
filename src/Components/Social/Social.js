import React, { Component } from 'react';
import styles from './Social.module.scss';
import booksyButton from '../../images/booksy-button.png';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class Social extends Component {
    state = {
        visibleCounter: false,
        visibleSection: false
    };
    onVisibilityCounterChange = isVisible => {
        if (isVisible) {
            this.setState({ visibleCounter: true });
        }
    }
    onVisibilitySectionChange = isVisible => {
        if (isVisible) {
            this.setState({
                visibleSection: true
            })
        }
    }
    render() {

        const { social, socialShow, socialHide, booksy_container, facebook_container, booksy_button, title, separator, button, description, circle_number, additional_description } = styles;
        return (
            <VisibilitySensor
                onChange={this.onVisibilitySectionChange}
                delayedCall
                partialVisibility
            >
                <section id="rezerwacja" className={social}>
                    <div className={this.state.visibleSection ? `${socialHide} ${socialShow} ` : socialHide}>
                        <div className="container">
                            <div className={booksy_container}>
                                <div className={booksy_button}>
                                    <img src={booksyButton} alt="" />
                                </div>
                                <div className={title}>
                                    Zarezerwuj wizytę <span className={separator}></span>
                                </div>
                                <a href="https://booksy.com/pl-pl/15274_klaudia-lejko-swiat-masazu_masaz_15608_poznan" target="_blank" rel="noopener noreferrer" >
                                    <div className={button}>Rezerwuje</div>
                                </a>
                            </div>
                            <div className={facebook_container}>
                                <p className={description}>Jest nas ponad</p>
                                <div className={circle_number}>
                                    <VisibilitySensor onChange={this.onVisibilityCounterChange} delayedCall>
                                        <CountUp delay={2} start={0} end={this.state.visibleCounter ? 1008 : 0}
                                            duration={3} />
                                    </VisibilitySensor>
                                </div>
                                <p className={additional_description}>Dziękujemy za zaufanie!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </VisibilitySensor>
        )
    }
}


export default Social;