import React, {useEffect} from "react";
import styles from "./bookings.module.scss";
import BookingCard from "./booking-card";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import { bookingsActions } from "../../../store/actions";

const Bookings = () => {
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(bookingsActions.get() as any)
    }, [dispatch]);

    const {bookings} = useAppSelector(({bookingsReducer})=>({
        bookings: bookingsReducer.bookings
    }));


    //const [bookings, setBookings] = useBookingList();

    const deleteCard = (id: string) => {
        dispatch(bookingsActions.deleteById({id}) as any);
        // const indexMessage = bookings.findIndex(booking => booking.id === id);
        // const before = bookings.slice(0, indexMessage);
        // const after = bookings.slice(indexMessage + 1);
        // const newBookings = [...before, ...after];
        //setBookings(newBookings);
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