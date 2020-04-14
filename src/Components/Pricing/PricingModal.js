import React, { Component } from 'react';
import styles from './PricingModal.module.scss';
import PriceItem from './PriceItem';
import closeImage from '../../images/close.svg';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';



class PricingModal extends Component {
    state = {
        canClose: true,
        data: []
    }

    componentDidMount() {
        fetch('/data/dataPrice.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.data
                })
            })
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
        }
    }



    render() {
        const { pricingModal, pricingModalContent, pricingModalShow, pricingModalContainer, mobileContainer, closeModal, categoryName, categoryList } = styles
        const data = [...this.state.data]
        const services = data.map(serivice => {
            return (
                <div
                    className={categoryList}
                    key={serivice.name}
                >
                    <p className={categoryName}>{serivice.name}</p>
                    {serivice.values.map(item => {
                        return (
                            <PriceItem
                                content={item.content}
                                price={item.price}
                                time={item.time}
                                key={`${item.content}${item.price}`}
                            />
                        )
                    })}
                </div>
            )
        })

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
                        <div>
                            <div className={closeModal} onClick={this.props.click}>
                                <img src={closeImage} alt="" />
                            </div>
                            {this.props.width > 768 ? <SimpleBar className="modalScroll" style={{ maxHeight: "100%" }}>
                                {services} </SimpleBar> : <div className={mobileContainer}>{services}</div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PricingModal;