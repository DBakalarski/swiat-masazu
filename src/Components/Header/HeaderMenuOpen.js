import React from 'react';
import logoImage from '../../images/logo.svg';
import closeImage from '../../images/close.svg';
import styles from './HeaderMenuOpen.module.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


const HeaderMenuOpen = (props) => {
    const { header_menu, logo, nav_close, navclose_item, description, main_description, separator, mail, header_container, nav_item, number, section_link, section_name, section_desc, section_separator } = styles
    return (
        <div className={header_container}>
            <div className={header_menu}>

                <div className={logo}>
                    <img src={logoImage} alt="logo" />
                </div>
                <div onClick={props.click} className={nav_close}>
                    <div className={navclose_item}>
                        <img src={closeImage} alt="menu" />
                        <p>Zamknij</p>
                    </div>
                </div>
            </div>

            <nav>
                <SimpleBar style={{ maxHeight: 300 }}>
                    <a href="/price">
                        <div className={nav_item}>
                            <div className={number}>1</div>
                            <div className={section_link}>
                                <div className={section_name}>Zakres usług</div>
                                <div className={section_desc}>Szeroka oferta zabiegów</div>
                                <span className={section_separator}></span>
                            </div>
                        </div>
                    </a>

                    <div className={nav_item}>
                        <div className={number}>2</div>
                        <div className={section_link}>
                            <div className={section_name}>Oferta dla firm</div>
                            <div className={section_desc}>Szeroka oferta zabiegów</div>
                            <span className={section_separator}></span>
                        </div>
                    </div>
                    <div className={nav_item}>
                        <div className={number}>3</div>
                        <div className={section_link}>
                            <div className={section_name}>Masaż kobiet ciężarnych</div>
                            <div className={section_desc}>Szeroka oferta zabiegów</div>
                            <span className={section_separator}></span>
                        </div>
                    </div>
                    <div className={nav_item}>
                        <div className={number}>4</div>
                        <div className={section_link}>
                            <div className={section_name}>Lokalizacja</div>
                            <div className={section_desc}>Szeroka oferta zabiegów</div>
                            <span className={section_separator}></span>
                        </div>
                    </div>
                    <div className={nav_item}>
                        <div className={number}>5</div>
                        <div className={section_link}>
                            <div className={section_name}>Zarezerwuj wizytę</div>
                            <div className={section_desc}>Szeroka oferta zabiegów</div>
                            <span className={section_separator}></span>
                        </div>
                    </div>

                </SimpleBar>
            </nav>
            <div className={description}>
                <div className={main_description}>
                    <p>Uzyskaj indywidualną ofertę</p>
                </div>
                <div className={mail}>
                    <p>klausiaswiatmasaz@gmail.com</p>
                    <span className={separator}></span>
                </div>
            </div>
        </div>
    );
}

export default HeaderMenuOpen;