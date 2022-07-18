import React, {useEffect, useState} from "react";
import styles from "./trip.module.scss";
import {Button} from "../../basic";
import {useParams} from "react-router-dom";
import Modal from "./modal";
import {useTravelList} from "../../../hooks/useTravelList";
import {IBooking, ITravel} from "../../../hooks/interfaces";
import {useBookingList} from "../../../hooks/useBookingList";

const Trip = () => {
    const [cards, setCards] = useTravelList();
    const [bookings, setBookings] = useBookingList();

    const params = useParams();

    const [card, setCard] = useState(() => {
        return cards.find((card: ITravel) => {
            if(card.id === params.id) {
                return true;
            } else {
                return false;
            }
        });
    })

    const addBooking = (newBooking: IBooking) => {
        const newBookings = [...bookings, newBooking];
        setBookings(newBookings);
    }


    const [isModalOpen, setIsModalOpen] = useState(false);

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
                    <Button className={styles.trip__button} onClick={() => setIsModalOpen(true)}>Book a trip</Button>
                </div>
            </div>
                {isModalOpen && <Modal addBooking={addBooking} card={card} onClose={() => setIsModalOpen(false)}/>}
        </main>
        : null
    );
}

export default Trip;