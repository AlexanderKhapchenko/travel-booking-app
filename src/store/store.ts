import { configureStore } from '@reduxjs/toolkit';
import { auth, trips } from '../services/services';
import { authReducer, tripsReducer } from './root-reducer';

const store = configureStore({
    reducer: {
        authReducer,
        tripsReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    auth,
                    trips
                },
            },
        });
    },
});
export type RootState = ReturnType<typeof store.getState>
export { store };
