import React from 'react';
import styles from './header.module.scss';
import {Navigation} from "../index";
import {Link} from "react-router-dom";
import {Routes} from "../../../constants/routes";

interface IHeaderProps {
    needNavigation?: boolean
}

const Header: React.FC<IHeaderProps> = (props) => {
    const {needNavigation} = props;

    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <Link to={Routes.Main} className={styles.header__logo}>Travel App</Link>
                {needNavigation && <Navigation className={styles.header__nav}/>}
            </div>
        </header>
    );
}

export default Header;