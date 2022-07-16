import React, {FC, HTMLAttributes} from 'react';
import styles from "./navigation.module.scss";
import * as Image from "../../../assets";
import {Button} from "../../basic";
import Profile from "./profile";
import Item from "./item";

const Navigation: FC<HTMLAttributes<HTMLElement>> = (props) => {

    const items =
        [
            {
                containerClass: styles.navHeader__item,
                title: 'Bookings',
                linkTo: '/bookings',
                innerClass: styles.navHeader__inner,
                spanText: 'Booking',
                spanClass: styles.visuallyHidden,
                imgUrl: Image.Briefcase,
                imgAlt: 'icon'
            },{
                containerClass: styles.navHeader__item,
                title: 'Profile',
                innerClass: `${styles.navHeader__inner} ${styles.profileNav}`,
                spanText: 'Profile',
                spanClass: styles.visuallyHidden,
                imgUrl: Image.User,
                imgAlt: 'profile icon',
                childComponent: <Profile username={"John Doe"}/>
            }
        ];

    return (
        <nav {...props}>
            <ul className={styles.navHeader__list}>
                {items.map((item) =>
                    <Item key={item.imgAlt} {...item}/>
                )}
            </ul>
        </nav>
    );
}

export default Navigation;