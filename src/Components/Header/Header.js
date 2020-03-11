import React from 'react';
import styles from './Header.module.scss'

const Header = () => {
    const { header, header_menu, logo, nav, nav_item, description, main_description, separator, additional_description } = styles
    return (
        <section className={header}>
            <div className="container">
                <div className={header_menu}>

                    <div className={logo}>
                        Logo
                    </div>
                    <div className={nav}>
                        <div className={nav_item}>
                            <img src="" alt="" />
                            <p>Rezerwacja</p>
                        </div>
                        <div className={nav_item}>
                            <img src="" alt="" />
                            <p>Lokalizacja</p>
                        </div>
                        <div className={nav_item}>
                            <img src="" alt="" />
                            <p>Menu</p>
                        </div>
                    </div>
                </div>
                <div className={description}>
                    <div className={main_description}>
                        <h1>Masaż jest najlepszą formą relaksu dla ciała i duszy</h1>
                        <span className={separator}></span>
                    </div>
                    <div className={additional_description}>
                        <h2>Specjalizuję się w masażach klasycznych i leczniczych.</h2>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Header;