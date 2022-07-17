import React from "react";
import styles from "./main.module.scss";

const Main = () => {
    return (
        <main>
            <h1 className={styles.visuallyHidden}>Travel App</h1>
            <section className={styles.tripsFilter}>
                <h2 className={styles.visuallyHidden}>Trips filter</h2>
                <form className={styles.tripsFilter__form} autoComplete="off">
                    <label className={`${styles.tripsFilter__search} ${styles.input}`}>
                        <span className={styles.visuallyHidden}>Search by name</span>
                        <input name="search" type="search" placeholder="search by title"/>
                    </label>
                    <label>
                        <span className={styles.visuallyHidden}>Search by duration</span>
                        <select className={styles.select} name="duration">
                            <option value="">duration</option>
                            <option value="0_x_5">&lt; 5 days</option>
                            <option value="5_x_10">&lt; 10 days</option>
                            <option value="10_x">&ge; 10 days</option>
                        </select>
                    </label>
                    <label>
                        <span className={styles.visuallyHidden}>Search by level</span>
                        <select className={styles.select} name="level">
                            <option value="">level</option>
                            <option value="easy">easy</option>
                            <option value="moderate">moderate</option>
                            <option value="difficult">difficult</option>
                        </select>
                    </label>
                </form>
            </section>
            <section className={styles.trips}>
                <h2 className={styles.visuallyHidden}>Trips List</h2>
                <ul className={styles.tripList}>
                    <li className={styles.tripCard}>
                        <img src="./assets/images/iceland.jpg" alt="trip image"/>
                        <div className={styles.tripCard__content}>
                            <div className={styles.tripInfo}>
                                <h3 className={styles.tripInfo__title}>Iceland</h3>
                                <div className={styles.tripInfo__content}>
                                    <span className={styles.tripInfo__duration}><strong>15</strong> days</span>
                                    <span className={styles.tripInfo__level}>easy</span>
                                </div>
                            </div>
                            <div className="trip-price">
                                <span>Price</span>
                                <strong className="trip-price__value">7000 $</strong>
                            </div>
                        </div>
                        <a href="./trip.html" className="button">Discover a trip</a>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Main;