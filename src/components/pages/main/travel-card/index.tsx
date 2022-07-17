import React, {FC} from "react";
import styles from "./travel-card.module.scss";
import {ITravelCardProps} from "./interface";

const TravelCard: React.FC<ITravelCardProps> = (props) => {

    const {image, title, duration, level, price} = props;

    return (
        <li className={styles.tripCard}>
            <img src={image.url} alt={image.alt}/>
            <div className={styles.tripCard__content}>
                <div className={styles.tripInfo}>
                    <h3 className={styles.tripInfo__title}>{title}</h3>
                    <div className={styles.tripInfo__content}>
                        <span className={styles.tripInfo__duration}><strong>{duration}</strong> days</span>
                        <span className={styles.tripInfo__level}>{level}</span>
                    </div>
                </div>
                <div className="trip-price">
                    <span>Price</span>
                    <strong className={styles.tripPrice__value}>{price} $</strong>
                </div>
            </div>
            <a href="./trip.html" className={styles.button}>Discover a trip</a>
        </li>
    )
}

export default TravelCard;