import React from "react";
import styles from "./bookings.module.scss";
import {Button} from "../../basic";

const Bookings = () => {
    return (
        <main className={styles.bookingsPage}>
            <h1 className={styles.visuallyHidden}>Travel App</h1>
            <ul className={styles.bookings__list}>
                <li className={styles.booking}>
                    <h3 className={styles.booking__title}>Iceland</h3>
                    <span>2 guests</span>
                    <span>13.07.2022</span>
                    <span>14000 $</span>
                    <Button className={styles.booking__cancel} title="Cancel booking">
                        <span className={styles.visuallyHidden}>Cancel booking</span>
                        ×
                    </Button>
                </li>
                <li className={styles.booking}>
                    <h3 className={styles.booking__title}>Iceland</h3>
                    <span>2 guests</span>
                    <span>30.09.2022</span>
                    <span>14000 $</span>
                    <Button className={styles.booking__cancel} title="Cancel booking">
                        <span className={styles.visuallyHidden}>Cancel booking</span>
                        ×
                    </Button>
                </li>
                <li className={styles.booking}>
                    <h3 className={styles.booking__title}>Iceland</h3>
                    <span>2 guests</span>
                    <span>10.11.2022</span>
                    <span>14000 $</span>
                    <Button className={styles.booking__cancel} title="Cancel booking">
                        <span className={styles.visuallyHidden}>Cancel booking</span>
                        ×
                    </Button>
                </li>
            </ul>
        </main>
    );
}

export default Bookings;