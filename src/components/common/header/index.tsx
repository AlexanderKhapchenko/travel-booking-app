import React from 'react';
import styles from './header.module.scss';
import {Navigation} from "../index";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <a href="./index.html" className={styles.header__logo}>Travel App</a>
                <Navigation className={styles.header__nav}/>
            </div>
        </header>
    );
}

export default Header;