import React, {useEffect, useState} from "react";
import {RouteProps, Navigate, useNavigate} from "react-router-dom";
import {Footer, Header} from "../../common";
import {Routes} from "../../../common/enums/routes/routes";
import Loader from "../../common/loader/loader";
import {DataStatus} from "../../../common/enums/app/app";
import {useAuth} from "../../../hooks/useAuth";

interface IPrivateRouteProps extends RouteProps {
    component: React.ComponentType<any>;
}

const PrivateRoute = (props: IPrivateRouteProps) => {
    const {component: Component} = props;

    const navigate = useNavigate();
    const {status, isAuthorized} = useAuth();

    if (status === DataStatus.PENDING) {
        return (
            <main>
                <Loader />
            </main>
        );
    }

    if(status === DataStatus.ERROR) {
        navigate(Routes.SignIn);
    }

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
