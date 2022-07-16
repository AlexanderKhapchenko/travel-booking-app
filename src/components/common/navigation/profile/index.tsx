import React, {HTMLAttributes} from "react";
import styles from './profile.module.scss';
import * as Image from "../../../../assets";
import {Button} from "../../../basic";

interface IProfileProps extends HTMLAttributes<HTMLElement>{
    username: string
}

const Profile = (props: IProfileProps) => {
    return (
        <>
            <ul className={styles.profileNav__list}>
                <li className={`${styles.profileNav__item}`}>{props.username}</li>
                <li className={styles.profileNav__item}>
                    <Button className={styles.profileNav__signOut} children="Sign Out"/>
                </li>
            </ul>
        </>
    );
}

export default Profile;