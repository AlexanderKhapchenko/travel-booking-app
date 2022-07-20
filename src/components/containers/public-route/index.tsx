import React from "react";
import {RouteProps, Navigate} from "react-router-dom";
import {Footer, Header} from "../../common";
import {Routes} from "../../../common/enums/routes/routes";
import {isSignedIn} from "../../../services/auth/auth.service";

interface IPublicRouteProps extends RouteProps {
    needHeader?: boolean;
    needFooter?: boolean;
}

const PublicRoute = (props: IPublicRouteProps) => {
    const {needHeader, needFooter, element} = props;

    const isAuthorized = isSignedIn();

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
