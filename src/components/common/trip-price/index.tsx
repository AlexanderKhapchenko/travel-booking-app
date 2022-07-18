import React from "react";
import styles from "../../pages/main/travel-card/travel-card.module.scss";

interface ITripPriceProps {
    price: number
}

const TripPrice: React.FC<ITripPriceProps> = ({price}) => {
    return (
        <div>
            <span>Price</span>
            <strong className={styles.tripPrice__value}>{price} $</strong>
        </div>
    )
}

export default TripPrice;