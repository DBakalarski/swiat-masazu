import React from 'react';
import styles from './Social.module.scss';
import booksyButton from '../../images/booksy-button.png';

const Social = () => {
    const { social, booksy_container, facebook_container, booksy_button, title, separator, button, description, circle_number, additional_description } = styles;
    return (
        <section id="rezerwacja" className={social}>
            <div className="container">
                <div className={booksy_container}>
                    <div className={booksy_button}>
                        <img src={booksyButton} alt="" />
                    </div>
                    <div className={title}>
                        Zarezerwuj wizytę <span className={separator}></span>
                    </div>
                    <div className={button}>Rezerwuje</div>
                </div>
                <div className={facebook_container}>
                    <p className={description}>Jest nas ponad</p>
                    <div className={circle_number}>650</div>
                    <p className={additional_description}>Dziękujemy za zaufanie!</p>
                </div>
            </div>
        </section>
    );
}

export default Social;