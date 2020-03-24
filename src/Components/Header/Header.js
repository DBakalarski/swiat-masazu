import React from 'react';
import styles from './Header.module.scss';
import Slider from './Slider';
import HeaderMenuCLose from './HeaderMenuClose';
import HeaderMenuOpen from './HeaderMenuOpen';


const Header = (props) => {
    const { header, header_content } = styles
    let isMenuOpen = props.isMenuOpen;
    return (
        <section className={header}>
            <div className="container">
                <div className={header_content}>
                    {isMenuOpen ?
                        <HeaderMenuOpen click={props.click} /> :
                        <HeaderMenuCLose click={props.click} />}
                    <Slider
                        isMenuOpen={props.isMenuOpen}
                    />
                </div>
            </div>
        </section >
    )
}

export default Header;