import React, {useEffect, useState} from "react";
import {RouteProps, Navigate, useNavigate} from "react-router-dom";
import {Footer, Header} from "../../common";
import {Routes} from "../../../common/enums/routes/routes";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {isHasToken} from "../../../helpers/token";
import {useDispatch} from "react-redux";
import Loader from "../../common/loader/loader";
import {authActions} from "../../../store/actions";
import {DataStatus} from "../../../common/enums/app/app";


interface IPrivateRouteProps extends RouteProps {
    component: React.ComponentType<any>;
}

const PrivateRoute = (props: IPrivateRouteProps) => {
    const {component: Component} = props;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {status, user} = useAppSelector(({authReducer})=>{
        return {
            status: authReducer.status,
            user: authReducer.user
        }
    });

    useEffect(() => {
        dispatch(authActions.authenticatedUser() as any);
    }, [dispatch])

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


    const isAuthorized = Boolean(user);

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
