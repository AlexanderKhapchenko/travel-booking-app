import React from "react";
import {RouteProps, Navigate} from "react-router-dom";
import {Footer, Header} from "../../common";
import {Routes} from "../../../constants/routes";
import {isSignedIn} from "../../../services/authService";

interface IPrivateRouteProps extends RouteProps {
    component: React.ComponentType<any>;
}

const PrivateRoute = (props: IPrivateRouteProps) => {
    const {component: Component} = props;

    const isAuthorized = isSignedIn();

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
