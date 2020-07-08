import React from 'react';
import styles from './Header.module.scss';
import Slider from './Slider';
import HeaderMenuCLose from './HeaderMenuClose';
import HeaderMenuOpen from './HeaderMenuOpen';
import HeaderMenuOpenMobile from './HeaderMenuOpenMobile';


const Header = (props) => {
    const { header, header_content } = styles
    let isMenuOpen = props.isMenuOpen;
    let width = props.width;
    let headerOpen;
    if (width < 960) {
        headerOpen = <HeaderMenuOpenMobile click={props.click} />
    } else { headerOpen = <HeaderMenuOpen click={props.click} /> }

    return (
        <section className={header} id="strona-glowna">
            <div className="container">
                <div className={header_content}>

                    {isMenuOpen ?
                        headerOpen :
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