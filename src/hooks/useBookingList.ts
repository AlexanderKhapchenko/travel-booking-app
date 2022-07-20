import React from "react";
import {useLocalStorage} from "./useLocalStorage";
import {defaultBooking} from "../common/constants/default-value";
import {IBooking} from "./interfaces";


export const useBookingList = ():  [IBooking[], React.Dispatch<IBooking[]>] => {
    const [bookingList, setBookingList] = useLocalStorage<IBooking[]>('booking', defaultBooking);
    return [bookingList, setBookingList];
}
