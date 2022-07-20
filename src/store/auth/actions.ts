import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';
import {TAuth} from "../../services/auth/auth.service";

interface IExtra {
    auth: TAuth;
}

export const signIn = createAsyncThunk(ActionType.SIGN_IN, async ({email, password} : {email: string, password: string}, {extra}  ) => ({
    user: await (extra as IExtra).auth.login(email, password),
}));

export const signUp = createAsyncThunk(ActionType.SIGN_UP, async ({fullName, password, email} : {fullName: string, password: string, email: string}, {extra}  ) => ({
    user: await (extra as IExtra).auth.register(fullName, password, email),
}));

export const authenticatedUser = createAsyncThunk(ActionType.AUTHENTICATED_USER, async (_args, {extra}  ) => ({
    user: await (extra as IExtra).auth.getAuthenticatedUser(),
}));
