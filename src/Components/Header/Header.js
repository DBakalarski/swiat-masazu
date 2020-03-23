import React from 'react';
import styles from './Header.module.scss';
import Slider from './Slider';
import HeaderMenuCLose from './HeaderMenuClose';
import HeaderMenuOpen from './HeaderMenuOpen';


const Header = () => {
    const { header, header_content } = styles
    return (
        <section className={header}>
            <div className="container">
                <div className={header_content}>
                    {/* <HeaderMenuCLose /> */}
                    <HeaderMenuOpen />
                    <Slider />
                </div>
            </div>
        </section >
    )
}

export default Header;