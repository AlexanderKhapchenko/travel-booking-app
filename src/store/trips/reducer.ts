import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from '../../common/enums/app/app';
import { getAll, getOne } from './actions';

export interface ITrip {
    id: string,
    title: string,
    description: string,
    level: string,
    duration: number,
    price: number,
    image: string,
    createdAt: string
}

interface IInitialState {
    trips: Array<ITrip>,
    trip: ITrip,
    status: string
}

const initialState: IInitialState = {
    trips: [],
    trip: {id: '',
        title: '',
        description: '',
        level: '',
        duration: 0,
        price: 0,
        image: '',
        createdAt: ''
    },
    status: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(getAll.pending, (state) => {
        state.status = DataStatus.PENDING;
    });
    builder.addCase(getAll.fulfilled, (state, { payload }) => {
        const { trips } = payload;
        state.trips = trips;
        state.status = DataStatus.SUCCESS;
    });


    builder.addCase(getOne.pending, (state) => {
        state.status = DataStatus.PENDING;
    });
    builder.addCase(getOne.fulfilled, (state, { payload }) => {
        const { trip } = payload;
        state.trip = trip;
        state.status = DataStatus.SUCCESS;
    });
});

export { reducer };