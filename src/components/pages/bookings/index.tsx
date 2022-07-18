import React from "react";
import styles from "./bookings.module.scss";
import {useBookingList} from "../../../hooks/useBookingList";
import BookingCard from "./booking-card";

const Bookings = () => {
    const [bookings, setBookings] = useBookingList();

    const deleteCard = (id: string) => {
        const indexMessage = bookings.findIndex(booking => booking.id === id);
        const before = bookings.slice(0, indexMessage);
        const after = bookings.slice(indexMessage + 1);
        const newBookings = [...before, ...after];
        setBookings(newBookings);
    }

    return (
        <main className={styles.bookingsPage}>
            <h1 className={styles.visuallyHidden}>Travel App</h1>
            <ul className={styles.bookings__list}>
                {bookings.map(booking => {
                    const {guests, date, totalPrice, trip: {title}, id} = booking;
                    return (
                        <BookingCard key={id} onDelete={() => deleteCard(id)} title={title} quests={guests} date={date} totalPrice={totalPrice}/>
                    )
                })}
            </ul>
        </main>
    );
}

export default Bookings;