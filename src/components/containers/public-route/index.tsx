import React, {useEffect} from "react";
import {RouteProps, Navigate} from "react-router-dom";
import {Footer, Header} from "../../common";
import {Routes} from "../../../common/enums/routes/routes";
import {useDispatch} from "react-redux";
import {DataStatus} from "../../../common/enums/app/data-status.enum";
import Loader from "../../common/loader/loader";
import {authActions} from "../../../store/actions";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAuth} from "../../../hooks/useAuth";

const PublicRoute = (props: RouteProps) => {
    const {element} = props;
    const {status, isAuthorized} = useAuth();

    if (status === DataStatus.PENDING) {
        return (
            <main>
                <Loader />
            </main>
        );
    }

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
