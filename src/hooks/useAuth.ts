import {useDispatch} from "react-redux";
import {useAppSelector} from "./useAppSelector";
import {useEffect} from "react";
import {authActions} from "../store/actions";
import {DataStatus} from "../common/enums/app/data-status.enum";
import {LocalKey} from "../common/enums/app/app";

export const useAuth = () => {
    const dispatch = useDispatch();
    const {status} = useAppSelector(({authReducer})=>{
        return {
            status: authReducer.status
        }
    });

    useEffect(() => {
        if (localStorage.getItem(LocalKey.TOKEN)) {
            dispatch(authActions.authenticatedUser() as any);
        }
    }, [dispatch])

    if(status === DataStatus.ERROR) {
        localStorage.removeItem(LocalKey.TOKEN);
    }

    const isAuthorized = (status === DataStatus.ERROR ? false : Boolean(localStorage.getItem(LocalKey.TOKEN)));

    return {
        status,
        isAuthorized
    };
}