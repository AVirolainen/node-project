import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import MainPage from "./components/MainPage/MainPage"
import AuthPage from "./components/AuthPage/AuthPage"

export const useRoutes = (isAuthenticated) =>{
    if(isAuthenticated){
        return(
            <Switch>
                <Route path="/home" exact>
                    <MainPage/>
                </Route>
                <Redirect to="/home" />
            </Switch>
        )
    }

    return(
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}