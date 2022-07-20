import React, {FC} from "react";
import styles from "./travel-card.module.scss";
import {ITravelCardProps} from "./interface";
import {Link} from "react-router-dom";
import {Routes} from "../../../../common/enums/routes/routes";
import * as Image from '../../../../assets';
import {TripInfo, TripPrice} from "../../../common";

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
            <img className={styles.tripCard__img} src={image.url} alt={image.alt}/>
            <div className={styles.tripCard__content}>
                <TripInfo title={title} duration={duration} level={level}/>
                <TripPrice price={price}/>
            </div>
            <Link to={route} className={styles.button}>Discover a trip</Link>
        </li>
    )
}

export default TravelCard;