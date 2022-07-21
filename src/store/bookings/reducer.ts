import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from '../../common/enums/app/app';
import { get, deleteById, post } from './actions';
import { IBookingPost, IBooking } from '../../services/bookings/bookings.service';

interface IInitialState {
    bookings: Array<IBooking>,
    booking: IBookingPost,
    status: string
}

const initialState: IInitialState = {
    bookings: [],
    booking: {
        tripId: '',
        userId: '',
        guests: 0,
        date: 'string'
    },
    status: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(get.pending, (state) => {
        state.status = DataStatus.PENDING;
    });
    builder.addCase(get.fulfilled, (state, { payload }) => {
        const { bookings } = payload;
        state.bookings = bookings;
        state.status = DataStatus.SUCCESS;
    });


    builder.addCase(deleteById.pending, (state) => {
        state.status = DataStatus.PENDING;
    });
    builder.addCase(deleteById.fulfilled, (state, { payload }) => {
        const { booking } = payload;
        state.bookings = state.bookings.filter((it) => it.id !== booking.id);
        state.status = DataStatus.SUCCESS;
    });

    builder.addCase(post.pending, (state) => {
        state.status = DataStatus.PENDING;
    });
    builder.addCase(post.fulfilled, (state, { payload }) => {
        const { booking } = payload;
        state.booking = booking;
        state.status = DataStatus.SUCCESS;
    });
});

export { reducer };