import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';
import {TBookings, IBookingPost, IBooking} from "../../services/bookings/bookings.service";

interface IExtra {
    bookings: TBookings;
}

export const get = createAsyncThunk(ActionType.GET, async (_args, {extra}  ) => ({
    bookings: await (extra as IExtra).bookings.get()
}));

export const deleteById = createAsyncThunk(ActionType.DELETE, async ({booking}:{booking:IBooking}, {extra}  ) => {
        await (extra as IExtra).bookings.delete(booking.id);
        return {booking}
});

export const post = createAsyncThunk(ActionType.POST, async ({book}:{book:IBookingPost}, {extra}  ) => ({
    booking: await (extra as IExtra).bookings.post(book)
}));