import React from 'react';
import styles from './FooterSign.module.scss';


const FooterSign = () => {
    const { footerSign } = styles;
    return (
        <div className={footerSign}>
            Created by <a href="https://github.com/DBakalarski" target="_blank" rel="noopener noreferrer"> Dawid Bakalarski</a>
        </div>

    );
}

export default FooterSign;