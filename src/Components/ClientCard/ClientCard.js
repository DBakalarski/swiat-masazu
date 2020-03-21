import React from 'react';
import styles from './ClientCard.module.scss'
import cardImage from '../../images/slider/masaz-plecy.svg'


const ClientCard = () => {
    const { card_container, card_content, title, image, circle, number, desc } = styles
    return (
        <div className={card_container}>
            <div className={card_content}>
                <div className={title}>
                    Karta<span>stałego klienta</span>
                </div>
                <img className={image} src={cardImage} alt="" />
            </div>
            <div className={circle}>
                <p className={number}>11</p>
                <p className={desc}>masaż klasyczny pleców <span>gratis</span></p>
            </div>
        </div>
    );
}

export default ClientCard;