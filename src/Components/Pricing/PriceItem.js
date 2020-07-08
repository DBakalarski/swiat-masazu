import React from 'react';
import styles from './PriceItem.module.scss'



const PriceItem = (props) => {
    const { price_item, price_title, title_text, description, time, price } = styles
    return (
        <div className={price_item}>
            <div className={price_title}>

                <span className={title_text}>{props.content}</span>
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

export default PriceItem;