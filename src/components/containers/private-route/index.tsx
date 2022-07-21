import React, {useCallback, useEffect} from "react";
import {RouteProps, Navigate} from "react-router-dom";
import {Footer, Header} from "../../common";
import {Routes} from "../../../common/enums/routes/routes";
import {isSignedIn} from "../../../services/auth/auth.service";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {IAuth} from "../../../services/http/interface";
import {RootState} from "../../../store/store";
import {authActions} from "../../../store/actions";
import {authReducer} from "../../../store/root-reducer";

interface IPrivateRouteProps extends RouteProps {
    component: React.ComponentType<any>;
}

const PrivateRoute = (props: IPrivateRouteProps) => {
    const {component: Component} = props;
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

    const {token} = useAppSelector(({authReducer})=>({
        token: authReducer.user.token
    }));

    const isAuthorized = Boolean(token);

    return (
        isAuthorized
        ? <>
            <Header needNavigation/>
            <Component/>
            <Footer/>
        </>
        : <Navigate to={Routes.SignIn}/>
    );
}

export default PrivateRoute;
