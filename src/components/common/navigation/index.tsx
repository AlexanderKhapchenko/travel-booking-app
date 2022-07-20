import React, {FC, HTMLAttributes, useState} from 'react';
import styles from "./navigation.module.scss";
import * as Image from "../../../assets";
import Profile from "./profile";
import Item from "./item";
import {getUsername, unsetLoginSession} from "../../../services/auth/auth.service";
import {useNavigate} from "react-router-dom";
import {Routes} from "../../../common/enums/routes/routes";

const Navigation: FC<HTMLAttributes<HTMLElement>> = (props) => {

    const [username, setUsername] = useState(() => {
        return getUsername();
    });

    const navigate = useNavigate();

    const onSignOut = () => {
        unsetLoginSession();
        setUsername(null);
        navigate(Routes.SignIn);
    }

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
                childComponent: <Profile username={username} onSignOut={onSignOut}/>
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