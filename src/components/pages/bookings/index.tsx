import React, {useCallback, useEffect} from "react";
import styles from "./bookings.module.scss";
import BookingCard from "./booking-card";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import { bookingsActions } from "../../../store/actions";
import {DataStatus} from "../../../common/enums/app/data-status.enum";
import Loader from "../../common/loader/loader";
import {IBooking} from "../../../services/bookings/bookings.service";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useNavigate} from "react-router-dom";
import {Routes} from "../../../common/enums/routes/routes.enum";

const Bookings = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {bookings, status} = useAppSelector(({bookingsReducer})=>({
        bookings: bookingsReducer.bookings,
        status: bookingsReducer.status
    }));

    useEffect(() => {
        dispatch(bookingsActions.get() as any)
    }, [dispatch]);

    const deleteCard = useCallback((booking: IBooking) => {
        dispatch(bookingsActions.deleteById({booking}) as any);
    }, [dispatch])

    if (status === DataStatus.PENDING) {
        return (
            <main>
                <Loader />
            </main>
        );
    }

    if(status === DataStatus.ERROR) {
        navigate(Routes.SignIn);
    }

    return (
        <main className={styles.bookingsPage}>
            <h1 className={styles.visuallyHidden}>Travel App</h1>
            <ul className={styles.bookings__list}>
                {bookings.map(booking => {
                    const {guests, date, totalPrice, trip: {title}, id} = booking;
                    return (
                        <BookingCard key={id} onDelete={() => deleteCard(booking)} title={title} quests={guests} date={date} totalPrice={totalPrice}/>
                    )
                })}
            </ul>
        </main>
    );
}

export default Bookings;