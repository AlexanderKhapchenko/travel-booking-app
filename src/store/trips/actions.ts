import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';
import {TTrips} from "../../services/trips/trips.service";

interface IExtra {
    trips: TTrips;
}

export const getAll = createAsyncThunk(ActionType.GET_ALL, async (_args, {extra}  ) => ({
    trips: await (extra as IExtra).trips.getAll()
}));

export const getOne = createAsyncThunk(ActionType.GET_ONE, async ({id}:{id:string}, {extra}  ) => ({
    trip: await (extra as IExtra).trips.getOne(id)
}));