import React, {useEffect, useState} from "react";
import styles from "./trip.module.scss";
import {Button} from "../../basic";
import {useParams} from "react-router-dom";
import Modal from "./modal";
import {IBookingPost} from "../../../services/bookings/bookings.service";
import {TripDescription, TripInfo, TripPrice} from "../../common";
import {useDispatch} from "react-redux";
import { tripsActions, bookingsActions } from "../../../store/actions";
import {DataStatus} from "../../../common/enums/app/data-status.enum";
import Loader from "../../common/loader/loader";
import {useAppSelector} from "../../../hooks/useAppSelector";

const Trip = () => {

    const params = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        if(params.id) {
            dispatch(tripsActions.getOne({id: params.id}) as any)
        }
    }, [dispatch, params.id]);

    const {card, userId, status} = useAppSelector(({tripsReducer, authReducer})=>({
        card: tripsReducer.trip,
        userId: authReducer.user.user!.id,
        status: tripsReducer.status
    }));

    const addBooking = (newBook: IBookingPost) => {
        dispatch(bookingsActions.post({book: newBook}) as any)
        setIsModalOpen(false);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    if (status === DataStatus.PENDING) {
        return (
            <main>
                <Loader />
            </main>
        );
    }

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