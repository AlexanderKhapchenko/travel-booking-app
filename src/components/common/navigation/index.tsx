import React, {FC, HTMLAttributes, useState} from 'react';
import styles from "./navigation.module.scss";
import * as Image from "../../../assets";
import Profile from "./profile";
import Item from "./item";
import {useNavigate} from "react-router-dom";
import {Routes} from "../../../common/enums/routes/routes";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {LocalKey} from "../../../common/enums/app/app";

const Navigation: FC<HTMLAttributes<HTMLElement>> = (props) => {

    const dispatch = useDispatch();

    const {username} = useAppSelector(({authReducer})=>({
        username: authReducer.user.user?.fullName,
    }));

    const navigate = useNavigate();

    const onSignOut = () => {
        localStorage.removeItem(LocalKey.TOKEN);
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