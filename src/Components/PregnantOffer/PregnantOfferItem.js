import React from 'react';
import styles from './PregnantOfferItem.module.scss'



const PregnantOfferItem = (props) => {
    const { price_item, price_title, title_separator, description, time, price } = styles
    return (
        <div className={price_item}>
            <div className={price_title}>
                {props.content}
                <span className={title_separator}></span>
            </div>
            <div className={description}>
                <div className={time}>
                    <span>{props.time || "30"}</span>
                    <span>minut</span>
                </div>
                <div className={price}>{props.price}</div>
            </div>
        </div>
    )
}

export default PregnantOfferItem;