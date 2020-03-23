import React from 'react';
import logoImage from '../../images/logo.svg';
import closeImage from '../../images/close.svg';
import styles from './HeaderMenuOpen.module.scss';
import CustomScroll from '../../../node_modules/react-custom-scroll';

const HeaderMenuClose = () => {
    const { header_menu, logo, nav_close, navclose_item, description, main_description, separator, mail, header_container, nav_item, number, section_link, section_name, section_desc, section_separator } = styles
    return (
        <div className={header_container}>
            <div className={header_menu}>

                <div className={logo}>
                    <img src={logoImage} alt="logo" />
                </div>
                <div className={nav_close}>
                    <div className={navclose_item}>
                        <img src={closeImage} alt="menu" />
                        <p>Zamknij</p>
                    </div>
                </div>
            </div>

            <nav>
                <CustomScroll heightRelativeToParent="100%">
                    <div className={nav_item}>
                        <div className={number}>1</div>
                        <div className={section_link}>
                            <div className={section_name}>Zakres usług</div>
                            <div className={section_desc}>Szeroka oferta zabiegów</div>
                            <span className={section_separator}></span>
                        </div>
                    </div>
                    <div className={nav_item}>
                        <div className={number}>1</div>
                        <div className={section_link}>
                            <div className={section_name}>Zakres usług</div>
                            <div className={section_desc}>Szeroka oferta zabiegów</div>
                            <span className={section_separator}></span>
                        </div>
                    </div>
                    <div className={nav_item}>
                        <div className={number}>1</div>
                        <div className={section_link}>
                            <div className={section_name}>Zakres usług</div>
                            <div className={section_desc}>Szeroka oferta zabiegów</div>
                            <span className={section_separator}></span>
                        </div>
                    </div>
                    <div className={nav_item}>
                        <div className={number}>1</div>
                        <div className={section_link}>
                            <div className={section_name}>Zakres usług</div>
                            <div className={section_desc}>Szeroka oferta zabiegów</div>
                            <span className={section_separator}></span>
                        </div>
                    </div>
                    <div className={nav_item}>
                        <div className={number}>1</div>
                        <div className={section_link}>
                            <div className={section_name}>Zakres usług</div>
                            <div className={section_desc}>Szeroka oferta zabiegów</div>
                            <span className={section_separator}></span>
                        </div>
                    </div>
                    <div className={nav_item}>
                        <div className={number}>1</div>
                        <div className={section_link}>
                            <div className={section_name}>Zakres usług</div>
                            <div className={section_desc}>Szeroka oferta zabiegów</div>
                            <span className={section_separator}></span>
                        </div>
                    </div>
                    <div className={nav_item}>
                        <div className={number}>1</div>
                        <div className={section_link}>
                            <div className={section_name}>Zakres usług</div>
                            <div className={section_desc}>Szeroka oferta zabiegów</div>
                            <span className={section_separator}></span>
                        </div>
                    </div>
                </CustomScroll>
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

export default HeaderMenuClose;