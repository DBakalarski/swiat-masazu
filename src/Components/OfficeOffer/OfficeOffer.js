import React, { Component } from 'react';
import styles from './OfficeOffer.module.scss'
import VisibilitySensor from 'react-visibility-sensor';

class OfficeOffer extends Component {
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
        const { office, officeShow, officeHide, title, separator, description, email, main_description, button, additional_description, office_container, book_container, circle, circle_top, circle_time, circle_minutes, cricle_button, title_container } = styles
        return (
            <VisibilitySensor
                onChange={this.onVisibilityChange}
                delayedCall
                minTopValue={this.props.width > 968 ? 300 : 100}
                partialVisibility
            >
                <section id="oferta-dla-firm" className={office}>
                    <div className={this.state.visible ? `${officeHide} ${officeShow} ` : officeHide}>
                        <div className="container">

                            <div className={office_container}>
                                <div className={title_container}>
                                    <div className={title}>
                                        Oferta dla firm
                        <span className={separator}></span>
                                    </div>
                                    <div className={description}>
                                        <p className={main_description}>Work<span>Site</span></p>
                                        <p className={additional_description}>Masaż biurowy</p>
                                    </div>
                                    <a href="mailto:klaudiaswiatmasazu@gmail.com"> <button className={button}>Uzyskaj indywidulaną ofertę</button></a>

                                    <div className={email}>klaudiaswiatmasazu@gmail.com</div>
                                </div>
                                <div className={book_container}>
                                    <div className={circle}>
                                        <div className={circle_time}>15</div>
                                        <div className={circle_minutes}>minut</div>
                                        <a href="mailto:klaudiaswiatmasazu@gmail.com">
                                            <button className={cricle_button}>Zamawiam</button>
                                        </a>
                                    </div>
                                    <div className={circle_top}>
                                        <div className={circle_time}>20</div>
                                        <div className={circle_minutes}>minut</div>
                                        <a href="mailto:klaudiaswiatmasazu@gmail.com">
                                            <button className={cricle_button}>Zamawiam</button>
                                        </a>
                                    </div>

                                    <div className={circle}>
                                        <div className={circle_time}>30</div>
                                        <div className={circle_minutes}>minut</div>
                                        <a href="mailto:klaudiaswiatmasazu@gmail.com">
                                            <button className={cricle_button}>Zamawiam</button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </VisibilitySensor>
        )
    }
}


export default OfficeOffer;