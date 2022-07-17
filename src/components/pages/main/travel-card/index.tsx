import React, {FC} from "react";
import styles from "./travel-card.module.scss";
import {ITravelCardProps} from "./interface";
import {Link} from "react-router-dom";
import {Routes} from "../../../../constants/routes";

const TravelCard: React.FC<ITravelCardProps> = (props) => {

    const {image, title, duration, level, price, id} = props;

    const route = Routes.TravelInfo.split('/').map(endpoint => {
        if(endpoint === ':id') {
            return id;
        } else {
            return endpoint;
        }
    }).join('/');

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
            <Link to={route} className={styles.button}>Discover a trip</Link>
        </li>
    )
}

export default TravelCard;