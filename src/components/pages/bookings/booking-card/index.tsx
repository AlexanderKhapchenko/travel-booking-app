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

    const padTo2Digits = (num: number) => {
        return num.toString().padStart(2, '0');
    }

    const formatDate = (date: Date) => {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('.');
    }

    return (
        <li className={styles.booking}>
            <h3 className={styles.booking__title}>{title}</h3>
            <span>{quests} guests</span>
            <span>{formatDate(new Date(date))}</span>
            <span>{totalPrice} $</span>
            <button className={styles.booking__cancel} title="Cancel booking" onClick={() => onDelete()}>
                <span className={styles.visuallyHidden}>Cancel booking</span>
                ×
            </button>
        </li>
    )
}

export default BookingCard;