import React, { Component } from 'react';
import styles from './Pricing.module.scss';
import PriceItem from './PriceItem';
import massage from '../../images/massage.png'
import VisibilitySensor from 'react-visibility-sensor';


class Pricing extends Component {
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
        const { pricing, pricingShow, price_content, title, separator, price_list, massage_image, price_items } = styles
        return (
            <VisibilitySensor
                onChange={this.onVisibilityChange}
                delayedCall
                partialVisibility
            >
                <section id="cennik-uslug" className={this.state.visible ? `${pricing} ${pricingShow} ` : pricing}>>
                <div className="container">
                        <div className={price_content}>
                            <div className={title}>
                                Cennik usług
                        <span className={separator}></span>
                            </div>
                            <div className={price_list}>
                                <div className={price_items}>
                                    <PriceItem
                                        content="masaż klasyczny całego ciała"
                                        price="70zł"
                                    />
                                    <PriceItem
                                        content="masaż klasyczny ciała | częściowy"
                                        price="50zł"
                                    />
                                    <PriceItem
                                        content="masaż gorącymi kamieniami"
                                        price="120zł"
                                    />
                                    <PriceItem
                                        content="masaż świecą"
                                        price="80zł"
                                    />
                                    <PriceItem
                                        content="masaż klasyczny całego ciała"
                                        price="90zł"
                                    />
                                </div>
                                <div className={massage_image}>
                                    <img src={massage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </VisibilitySensor>
        )
    }
}

export default Pricing;