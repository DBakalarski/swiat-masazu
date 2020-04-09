import React, { Component } from 'react';
import styles from './PricingModal.module.scss';
import PriceItem from './PriceItem';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


class PricingModal extends Component {


    render() {
        const { pricingModal, pricingModalShow, pricingModalContainer } = styles
        return (
            <div className={this.props.visible ? `${pricingModal} ${pricingModalShow} ` : pricingModal} >
                <div className={pricingModalContainer}>
                    <SimpleBar style={{ maxHeight: "100%" }}>
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
                    </SimpleBar>
                </div>
            </div>
        )
    }
}

export default PricingModal;