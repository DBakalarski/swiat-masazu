import React from 'react';
import styles from './Header.module.scss'

const Header = () => {
    const { header } = styles
    return (
        <section className={header}>
            <div className="container">
                Sekcja Header
            </div>
        </section>
    )
}

export default Header;