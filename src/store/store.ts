import { configureStore } from '@reduxjs/toolkit';
import { auth } from '../services/services';
import { authReducer } from './root-reducer';

const store = configureStore({
    reducer: {
        authReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    auth,
                },
            },
        });
    },
});
export type RootState = ReturnType<typeof store.getState>
export { store };
