import React from "react";
import styles from "./trip-description.module.scss";

interface ITripDescriptionProps {
    description: string
}

const TripDescription: React.FC<ITripDescriptionProps> = ({description}) => {
    return (
        <div className={styles.trip__description}>
            {description}
        </div>
    );
}

export default TripDescription;