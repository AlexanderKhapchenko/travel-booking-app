import React from "react";
import { Routes as Switch, Route} from 'react-router-dom';
import {Routes} from "../../../constants/routes";
import {Bookings, Main, SignIn, SignUp, Trip} from "../../pages";
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
                    <PrivateRoute component={Main}/>
                }
            />
            <Route
                path={Routes.TravelInfo}
                element={
                    <PrivateRoute component={Trip}/>
                }
            />
            <Route
                path={Routes.Any}
                element={
                    <PrivateRoute component={Main}/>
                }
            />
        </Switch>
    )
}

export default Routing;