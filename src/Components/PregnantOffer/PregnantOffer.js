import React from 'react';
import styles from './PregnantOffer.module.scss'
import pregnantImage from '../../images/pregnant.png'
import PriceItem from '../Pricing/PriceItem'

const PregnantOffer = () => {
    const { pregnant, description_container, description, header, separator, pregnant_container, main_description, additional_separator, additional_description, pricing_container, pricing_header, pricing_separator, pricing_content } = styles
    return (
        <section className={pregnant}>
            <div className="container">
                <div className={pregnant_container}>


                    <div className={description_container}>
                        <img src={pregnantImage} alt="ciąża" />
                        <div className={description}>
                            <div className={header}>Masaż kobiet ciężarnych i po porodzie <span className={separator}></span></div>
                            <div className={main_description}>
                                <p>Masaż kobiet w trakcie ciąży i zaraz po porodzie nie tylko relaksuje oraz przynosi ulgę, ale również działa przeciwobrzękowo. Masaż brzucha i ud zapobiega rozstępom. </p>
                                <p>Masaż kobiet ciężarnych - wykonywany jest pomiędzy 3-8 msc ciąży. </p>
                                <p>Obejmuje takie partie ciała jak: barki, kark, szyja, kręgosłup (szczególnie odcinek lędźwiowy,krzyżowy), brzuch, kończyny dolne i górne. </p>
                                <p>Pamiętajcie, że po porodzie CC trzeba mobilizować bliznę. </p>
                                <p>Codzienna pielęgnacja i masaż sprawia,że blizna nie będzie sztywna oraz nie pojawiają się problemy z bólem kręgosłupa.</p>

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
                            <PriceItem
                                content="masaż kobiet ciężarnych"
                                price="60zł"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PregnantOffer;