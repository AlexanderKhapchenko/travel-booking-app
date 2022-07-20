import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from '../../common/enums/app/app';
import { signIn, signUp, authenticatedUser } from './actions';

const initialState = {
    user: {
        user: {

        },
        token: ''
    } ,
    token: '',
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
        state.user = user;
        state.status = DataStatus.SUCCESS;
    });
});

export { reducer };