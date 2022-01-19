import React from "react";
import Auth from "routes/Auth/Auth";
import Home from "routes/Home";
import Profile from 'routes/Profile';
import Navigation from 'components/Navigation';
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                        <>
                            <Route exact path="/">
                                <Home userObj={userObj} />
                            </Route>
                            <Route exact path="/profile">
                                <Profile />
                            </Route> 
                            <Redirect from="*" to="/" />
                        </>
                    )
                    : (
                        <>
                            <Route exact path="/">
                                <Auth type={'login'} />
                            </Route>
                            <Route exact path="/signUp">
                                <Auth type={'signUp'} />
                            </Route>
                            <Route exact path="/login">
                                <Auth type={'login'} />
                            </Route>
                            <Redirect from="*" to="/" />
                        </>
                    )
                }
            </Switch>
        </Router>
    );
};

export default AppRouter;