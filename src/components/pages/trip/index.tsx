import React from "react";
import styles from "./trip.module.scss";
import {Button} from "../../basic";

const Trip = () => {
    return (
        <main className={styles.tripPage}>
            <h1 className={styles.visuallyHidden}>Travel App</h1>
            <div className={styles.trip}>
                <img src="./assets/images/iceland.jpg" className={styles.trip__img} alt="trip image"/>
                <div className={styles.trip__content}>
                    <div className={styles.tripInfo}>
                        <h3 className={styles.tripInfo__title}>Iceland</h3>
                        <div className={styles.tripInfo__content}>
                            <span className={styles.tripInfo__duration}><strong>15</strong> days</span>
                            <span className={styles.tripInfo__level}>easy</span>
                        </div>
                    </div>
                    <div className={styles.trip__description}>
                        An island is a body of land surrounded by water. Continents are also surrounded by
                        water, but because they are so big, they are not considered islands. Australia, the
                        smallest continent, is more than three times the size of Greenland, the largest island.
                        There are countless islands in the ocean, lakes, and rivers around the world. They vary
                        greatly in size, climate, and the kinds of organisms that inhabit them.
                    </div>
                    <div>
                        <span>Price</span>
                        <strong className={styles.tripPrice__value}>7000 $</strong>
                    </div>
                    <Button className={styles.trip__button}>Book a trip</Button>
                </div>
            </div>
        </main>
    );
}

export default Trip;