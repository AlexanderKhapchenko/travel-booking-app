import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from '../../common/enums/app/app';
import {signIn, signUp, authenticatedUser} from './actions';

interface IInitialState {
    user: {
        user?: {
            id: string
            email: string,
            password: string,
            fullName: string,
        },
        token?: string
    },
    status: string
}

const initialState: IInitialState = {
    user: {

    } ,
    status: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(signIn.pending, (state) => {
        state.status = DataStatus.PENDING;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.user = user;
        state.status = DataStatus.SUCCESS;
    });

    builder.addCase(signUp.pending, (state) => {
        state.status = DataStatus.PENDING;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.user = user;
        state.status = DataStatus.SUCCESS;
    });

    builder.addCase(authenticatedUser.pending, (state) => {
        state.status = DataStatus.PENDING;
    });
    builder.addCase(authenticatedUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.user.user = user;
        state.status = DataStatus.SUCCESS;
    });
    builder.addCase(authenticatedUser.rejected, (state) => {
        state.status = DataStatus.ERROR;
    });
});

export { reducer };