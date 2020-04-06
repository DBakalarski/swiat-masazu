import React from 'react';
import styles from './OfficeOffer.module.scss'

const OfficeOffer = () => {
    const { office, title, separator, description, email, main_description, button, additional_description, office_container, book_container, circle, circle_top, circle_time, circle_minutes, cricle_button, title_container } = styles
    return (
        <section id="oferta-dla-firm" className={office}>
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
                        <a href="mailto:klausiaswiatmasaz@gmail.com"> <button className={button}>Uzyskaj indywidulaną ofertą</button></a>

                        <div className={email}>klausiaswiatmasaz@gmail.com</div>
                    </div>
                    <div className={book_container}>
                        <div className={circle}>
                            <div className={circle_time}>15</div>
                            <div className={circle_minutes}>minut</div>
                            <button className={cricle_button}>Zamawiam</button>
                        </div>
                        <div className={circle_top}>
                            <div className={circle_time}>20</div>
                            <div className={circle_minutes}>minut</div>
                            <button className={cricle_button}>Zamawiam</button>
                        </div>

                        <div className={circle}>
                            <div className={circle_time}>30</div>
                            <div className={circle_minutes}>minut</div>
                            <button className={cricle_button}>Zamawiam</button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default OfficeOffer;