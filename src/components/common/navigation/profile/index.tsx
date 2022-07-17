import React, {HTMLAttributes} from "react";
import styles from './profile.module.scss';
import * as Image from "../../../../assets";
import {Button} from "../../../basic";
import {unsetLoginSession} from "../../../../services/authService";

interface IProfileProps extends HTMLAttributes<HTMLElement>{
    username: string,
    onSignOut: Function
}

const Profile = (props: IProfileProps) => {
    const {username, onSignOut} = props;


    return (
        <>
            <ul className={styles.profileNav__list}>
                <li className={`${styles.profileNav__item}`}>{username}</li>
                <li className={styles.profileNav__item}>
                    <Button className={styles.profileNav__signOut} children="Sign Out" onClick={() => onSignOut()}/>
                </li>
            </ul>
        </>
    );
}

export default Profile;