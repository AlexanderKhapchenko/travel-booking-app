import React, {useEffect, useState} from "react";
import styles from "./trip.module.scss";
import {Button} from "../../basic";
import {useParams} from "react-router-dom";
import Modal from "./modal";
// import {useTravelList} from "../../../hooks/useTravelList";
// import {IBooking, ITravel} from "../../../hooks/interfaces";
import {IBookingPost} from "../../../services/bookings/bookings.service";
// import {useBookingList} from "../../../hooks/useBookingList";
import {TripDescription, TripInfo, TripPrice} from "../../common";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { tripsActions, bookingsActions } from "../../../store/actions";
import {RootState} from "../../../store/store";

const Trip = () => {
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    // const [bookings, setBookings] = useBookingList();

    const params = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        if(params.id) {
            dispatch(tripsActions.getOne({id: params.id}) as any)
        }
    }, [dispatch, params.id]);

    const {card, userId} = useAppSelector(({tripsReducer, authReducer})=>({
        card: tripsReducer.trip,
        userId: authReducer.user.user!.id
    }));

    const addBooking = (newBook: IBookingPost) => {
        console.log(`adding ${newBook}`);

        dispatch(bookingsActions.post({book: newBook}) as any)
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        card
        ? <main className={styles.tripPage}>
            <h1 className={styles.visuallyHidden}>Travel App</h1>
            <div className={styles.trip}>
                <img src={card.image} className={styles.trip__img} alt="trip image"/>
                <div className={styles.trip__content}>
                    <TripInfo title={card.title} duration={card.duration} level={card.level}/>
                    <TripDescription description={card.description}/>
                    <TripPrice price={card.price}/>
                    <Button className={styles.trip__button} onClick={() => setIsModalOpen(true)}>Book a trip</Button>
                </div>
            </div>
                {isModalOpen && <Modal userId={userId} addBooking={addBooking} card={card} onClose={() => setIsModalOpen(false)}/>}
        </main>
        : null
    );
}

export default Trip;