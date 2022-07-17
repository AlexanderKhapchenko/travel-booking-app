import React, {useEffect, useState} from "react";
import styles from "./trip.module.scss";
import {Button} from "../../basic";
import * as Image from "../../../assets";
import {useParams} from "react-router-dom";
import {getById, ITravelListResponse} from "../../../services/api";

const Trip = () => {
    const [card, setCard] = useState<ITravelListResponse>()
    const params = useParams();

    useEffect(() => {
        async function callApi() {
            const card = await getById(params.id as string);
            setCard(card);
        }
        callApi();
    }, []);


    return (
        card
        ? <main className={styles.tripPage}>
            <h1 className={styles.visuallyHidden}>Travel App</h1>
            <div className={styles.trip}>
                <img src={card.image} className={styles.trip__img} alt="trip image"/>
                <div className={styles.trip__content}>
                    <div className={styles.tripInfo}>
                        <h3 className={styles.tripInfo__title}>{card.title}</h3>
                        <div className={styles.tripInfo__content}>
                            <span className={styles.tripInfo__duration}><strong>{card.duration}</strong> days</span>
                            <span className={styles.tripInfo__level}>{card.level}</span>
                        </div>
                    </div>
                    <div className={styles.trip__description}>
                        {card.description}
                    </div>
                    <div>
                        <span>Price</span>
                        <strong className={styles.tripPrice__value}>{card.price} $</strong>
                    </div>
                    <Button className={styles.trip__button}>Book a trip</Button>
                </div>
            </div>
        </main>
        : null
    );
}

export default Trip;