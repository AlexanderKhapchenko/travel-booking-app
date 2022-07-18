import {useLocalStorage} from "./useLocalStorage";
import {defaultTravel} from "./default-value";
import {ITravel} from "./interfaces";
import React from "react";

export const useTravelList = (): [ITravel[], React.Dispatch<ITravel[]>] => {
    const [travelList, setTravelList] = useLocalStorage<ITravel[]>("travel",  defaultTravel);
    return [travelList, setTravelList];
}

