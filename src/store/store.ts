import { configureStore } from '@reduxjs/toolkit';
import { auth, trips, bookings } from '../services/services';
import { authReducer, tripsReducer, bookingsReducer } from './root-reducer';

const store = configureStore({
    reducer: {
        authReducer,
        tripsReducer,
        bookingsReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    auth,
                    trips,
                    bookings
                },
            },
        });
    },
});
export type RootState = ReturnType<typeof store.getState>
export { store };
