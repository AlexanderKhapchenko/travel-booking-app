import React from "react";
import { Routes as Switch, Route} from 'react-router-dom';
import {Routes} from "../../../constants/routes";
import {Bookings, SignIn, SignUp, Trip} from "../../pages";
import {PublicRoute, PrivateRoute} from "../index";
import {setLoginSession} from "../../../services/authService";


const Routing = () => {

    return (
        <Switch>
            <Route
                path={Routes.SignIn}
                element={
                    <PublicRoute element={SignIn()}/>
                }
            />
            <Route
                path={Routes.SignUp}
                element={
                    <PublicRoute element={SignUp({setUsername: setLoginSession})}/>
                }
            />
            <Route
                path={Routes.Booking}
                element={
                    <PrivateRoute component={Bookings}/>
                }
            />
            <Route
                path={Routes.Main}
                element={
                    <PrivateRoute component={Trip}/>
                }
            />
        </Switch>
    )
}

export default Routing;