import React, { Component } from 'react';
import styles from './PregnantOffer.module.scss';
import pregnantImage from '../../images/pregnant.png';
import PregnantOfferItem from './PregnantOfferItem'
import VisibilitySensor from 'react-visibility-sensor';

class PregnantOffer extends Component {
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
        const { pregnant, pregnantShow, pregnantHide, description_container, description, header, separator, pregnant_container, main_description, additional_separator, additional_description, pricing_container, pricing_header, pricing_separator, pricing_content } = styles
        return (
            <VisibilitySensor
                onChange={this.onVisibilityChange}
                delayedCall
                minTopValue={this.props.width > 968 ? 300 : 100}
                partialVisibility
            >
                <section id="masaz-ciaza" className={pregnant}>
                    <div className={this.state.visible ? `${pregnantHide} ${pregnantShow} ` : pregnantHide}>
                        <div className="container">
                            <div className={pregnant_container}>


                                <div className={description_container}>
                                    <img src={pregnantImage} alt="ciąża" />
                                    <div className={description}>
                                        <div className={header}>Masaż kobiet w ciąży i po porodzie <span className={separator}></span></div>
                                        <div className={main_description}>
                                            <p>Masaż kobiet w trakcie ciąży i zaraz po porodzie nie tylko relaksuje oraz przynosi ulgę, ale również działa przeciwobrzękowo. Masaż brzucha i ud zapobiega rozstępom. </p>
                                            <p>Masaż kobiet w ciąży wykonywany jest pomiędzy 3 a 8 miesiącem ciąży. </p>
                                            <p>Obejmuje takie partie ciała jak: barki, kark, szyja, kręgosłup (szczególnie odcinek lędźwiowy i krzyżowy), brzuch, kończyny dolne i górne. </p>
                                            <p>Pamiętajcie, że po cesarskim cięciu trzeba mobilizować bliznę. </p>
                                            <p>Codzienna pielęgnacja i masaż sprawią, że blizna nie będzie sztywna oraz nie pojawiają się problemy z bólem kręgosłupa.</p>

                                        </div>
                                        <span className={additional_separator}></span>
                                        <div className={additional_description}>
                                            <p>UWAGA, PRZED MASAŻEM WYMAGAMY ZGODY LEKARZA NA WYKONANIE MASAŻU. </p>
                                            <p><span>Przeciwwskazania</span>: podwyższone ciśnienie tętnicze, podwyższona temperatura ciała, ciąża patologiczna, cukrzyca w ciąży, choroba nowotworowa.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={pricing_container}>
                                    <div className={pricing_header}>Cennik usług<span className={pricing_separator}></span></div>
                                    <div className={pricing_content}>
                                        <PregnantOfferItem
                                            content="masaż kobiet w ciaży"
                                            price="70zł"
                                        />
                                        <PregnantOfferItem
                                            content="masaż kobiet w ciąży"
                                            price="110zł"
                                            time="60"
                                        />
                                        <PregnantOfferItem
                                            content="terapia opracowania blizny"
                                            price="70zł"
                                            time="30"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </VisibilitySensor>
        );
    }
}


export default PregnantOffer;