import React from "react";
import styles from "./trip-info.module.scss";
import * as Image from "../../../assets";

interface ITripInfoProps {
    title: string,
    duration: number,
    level: string
}

const TripInfo: React.FC<ITripInfoProps> = ({title, duration, level}) => {
    return (
        <div className={styles.tripInfo}>
            <h3 className={styles.tripInfo__title}>{title}</h3>
            <div className={styles.tripInfo__content}>
                <span style={{backgroundImage: `url(${Image.Calendar})`}} className={styles.tripInfo__duration}><strong>{duration}</strong> days</span>
                <span className={styles.tripInfo__level}>{level}</span>
            </div>
        </div>
    );
}

export default TripInfo;