import React from "react";
import {ITravelCardProps} from "../travel-card/interface";
import TravelCard from "../travel-card";
import styles from "./travel-cards.module.scss";

interface ITravelCardsProps {
    cards?: ITravelCardProps[]
}

const TravelCards: React.FC<ITravelCardsProps> = ({cards}) => {

    return (
        <section className={styles.trips}>
            <h2 className={styles.visuallyHidden}>Trips List</h2>
            <ul className={styles.tripList}>
                {cards && cards.map(card => {
                    return <TravelCard key={card.id} {...card}/>
                })}
            </ul>
        </section>
    );
}

export default TravelCards;