import React from "react";
import {RouteProps, Navigate} from "react-router-dom";
import {Footer, Header} from "../../common";
import {Routes} from "../../../common/enums/routes/routes";
import {isSignedIn} from "../../../services/auth/auth.service";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../../store/store";

interface IPublicRouteProps extends RouteProps {
    needHeader?: boolean;
    needFooter?: boolean;
}

const PublicRoute = (props: IPublicRouteProps) => {
    const {needHeader, needFooter, element} = props;
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

    const {token} = useAppSelector(({authReducer})=>({
        token: authReducer.user.token
    }));

    const isAuthorized = Boolean(token);

    return (
        isAuthorized
        ? <Navigate to={Routes.Main}/>
        :<>
            <Header/>
            {element}
            <Footer/>
        </>
    );
}

export default PublicRoute;
