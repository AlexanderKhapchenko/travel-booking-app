import React from "react";
import styles from "../bookings.module.scss";

interface IBookingCardProps {
    title: string,
    quests: number,
    date: string,
    totalPrice: number,
    onDelete: Function
}

const BookingCard: React.FC<IBookingCardProps> = ({title, date, quests, totalPrice, onDelete}) => {
    return (
        <li className={styles.booking}>
            <h3 className={styles.booking__title}>{title}</h3>
            <span>{quests} guests</span>
            <span>{date}</span>
            <span>{totalPrice} $</span>
            <button className={styles.booking__cancel} title="Cancel booking" onClick={() => onDelete()}>
                <span className={styles.visuallyHidden}>Cancel booking</span>
                ×
            </button>
        </li>
    )
}

export default BookingCard;