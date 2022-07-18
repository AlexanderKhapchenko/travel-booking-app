import React, {useState} from "react";
import styles from "./modal.module.scss";
import Button from "../../../basic/button";
import {Input} from "../../../basic";
import {ITravel} from "../../../../hooks/interfaces";
import * as Image from "../../../../assets";
import {TripInfo} from "../../../common";

interface IModalProps {
    onClose: Function,
    card: ITravel,
    addBooking: Function
}

const Modal: React.FC<IModalProps> = ({onClose, card, addBooking}) => {

    const [date, setDate] = useState('');
    const [guestsNumber, setGuestsNumber] = useState(1);

    const validateDate = (newDate: string) => {
        const nowDate = new Date();
        const bookDate = new Date(newDate);
        if(bookDate > nowDate) {
            setDate(newDate);
        } else {
            alert("Date must be in future");
        }
    }

    const onSubmit = () => {
        if(date.length > 1 && guestsNumber >= 1 && guestsNumber <= 10) {
            const newBooking = {
                id: card.id,
                userId: card.id,
                tripId: card.id,
                guests: guestsNumber,
                date: date,
                trip: {
                    title: card.title,
                    duration: card.duration,
                    price: card.price
                },
                totalPrice: guestsNumber * card.price,
                createdAt: new Date(),
            }

            addBooking(newBooking);
        }
    }

    return (
        <div className={styles.modal}>
            <div className={styles.tripPopup}>
                <button className={styles.tripPopup__close} onClick={() => onClose()}>×</button>
                <form className={styles.tripPopup__form} autoComplete="off" onSubmit={onSubmit}>
                    <TripInfo title={card.title} level={card.level} duration={card.duration}/>
                    <Input
                        title="Date"
                        name="date"
                        type="date"
                        required
                        value={date}
                        onChange={(e) => validateDate(e.target.value)}
                    />
                    <Input
                        title="Number of guests"
                        name="guests"
                        type="number"
                        min="1"
                        max="10"
                        required
                        value={guestsNumber}
                        onChange={(e) => setGuestsNumber(Number(e.target.value))}
                    />
                    <span className={styles.tripPopup__total}>
                      Total: <output className={styles.tripPopup__totalValue}>{card.price * guestsNumber}$</output>
                    </span>
                    <Button type="submit">Book a trip</Button>
                </form>
            </div>
        </div>
    )
}

export default Modal;