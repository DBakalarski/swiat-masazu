import React, { Component } from 'react';
import styles from './PricingModal.module.scss';
import PriceItem from './PriceItem';
import closeImage from '../../images/close.svg';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


class PricingModal extends Component {
    state = {
        canClose: true
    }

    handleChangeClose = (value) => {
        if (value === true) {
            this.setState({
                canClose: true
            })
        } else {
            this.setState({
                canClose: false
            })
            console.log("false")
        }
    }

    render() {
        const { pricingModal, pricingModalContent, pricingModalShow, pricingModalContainer, closeModal, categoryName } = styles
        return (
            <div
                className={this.props.visible ? `${pricingModal} ${pricingModalShow} ` : pricingModal}
                onClick={this.state.canClose ? this.props.click : null}
            >
                <div className={pricingModalContent}>

                    <div className={pricingModalContainer}
                        onMouseEnter={() => this.handleChangeClose()}
                        onMouseLeave={() => this.handleChangeClose(true)}
                    >
                        <div className={closeModal} onClick={this.props.click}>
                            <img src={closeImage} alt="" />
                        </div>
                        <SimpleBar style={{ maxHeight: "100%" }}>
                            <p className={categoryName}>Dla zdrowia</p>
                            <PriceItem
                                content="Masaż klasyczny"
                                price="60zł"
                            />
                            <PriceItem
                                content="Masaż klasyczny"
                                price="85zł"
                                time="60"
                            />
                            <PriceItem
                                content="Masaż klasyczny"
                                price="145zł"
                                time='90'
                            />
                            <PriceItem
                                content="Drenaż limfatyczny kończyny dolne"
                                price="80zł"
                                time="60"
                            />
                            <PriceItem
                                content="Drenaż limfatyczny kończyny górne"
                                price="150zł"
                                time="60"
                            />
                            <PriceItem
                                content="Masaż Shantala - kurs dla rodziców"
                                price="80zł"
                                time="60"
                            />
                            <PriceItem
                                content="Terapia blizny"
                                price="70zł"
                                time="40"
                            />
                            <PriceItem
                                content="Masaż kobiet ciężarnych"
                                price="60zł"
                            />
                            <PriceItem
                                content="Masaż kobiet ciężarnych"
                                price="90zł"
                                time="60"
                            />
                            <PriceItem
                                content="Terapia bólów głowy/zniesienie napięć karku"
                                price="100zł"
                                time="60"
                            />
                            <p className={categoryName}>Dla urody</p>
                            <PriceItem
                                content="Masaż liftingujący twarz"
                                price="90zł"
                                time="45"
                            />
                            <PriceItem
                                content="Masaż bańką chińską" price="45zł"
                            />
                            <PriceItem
                                content="Masaż bańką chińską"
                                price="70zł"
                                time="60"
                            />
                            <PriceItem
                                content="Drenaż limfatyczny twarzy"
                                price="70zł"
                                time="40"
                            />
                            <p className={categoryName}>Dla aktywnych</p>
                            <PriceItem
                                content="Masaż sportowy"
                                price="60zł"
                            />
                            <PriceItem
                                content="Masaż sportowy"
                                price="90zł"
                                time="70"
                            />
                            <PriceItem
                                content="Masaż centryfugalny - stawowy"
                                price="100zł"
                                time="45"
                            />
                            <PriceItem
                                content="Masaż tkanek Głębokich"
                                price="85zł"
                            />
                            <PriceItem
                                content="Masaż tkanek Głębokich"
                                price="100zł"
                                time="60"
                            />
                            <PriceItem
                                content="Masaż tkanek Głębokich"
                                price="125zł"
                                time="90"
                            />
                            <p className={categoryName}>Dla relaksu</p>
                            <PriceItem
                                content="Masaż stóp"
                                price="60zł"
                            />
                            <PriceItem
                                content="Masaż sportowy"
                                price="90zł"
                                time="70"
                            />
                            <PriceItem
                                content="Masaż centryfugalny - stawowy"
                                price="100zł"
                                time="45"
                            />
                            <PriceItem
                                content="Masaż tkanek Głębokich"
                                pricce="85zł"
                            />
                            <PriceItem
                                content="Masaż tkanek Głębokich"
                                price="100zł"
                                time="60"
                            />
                            <PriceItem
                                content="Masaż tkanek Głębokich"
                                price="125zł"
                                time="90"
                            />
                            <PriceItem
                                content="masaż klasyczny całego ciała"
                                price="90zł"
                            />
                        </SimpleBar>
                    </div>
                </div>
            </div>
        )
    }
}

export default PricingModal;