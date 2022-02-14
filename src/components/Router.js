import React from "react";
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import Auth from "routes/Auth/Auth";
import Profile from "components/Profile/Profile";
import SideBar from "components/SideBar";
import Home from "components/Home/Home";

import '../css/Layer.css'

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
            {/* {isLoggedIn} */}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <div className="layer-box">
                            <SideBar />
                            <Route exact path="/">
                                <Home userObj={userObj} />
                            </Route>
                            <Route exact path="/profile">
                                <Profile userObj={userObj}/>
                            </Route>
                            <Redirect from="*" to="/" />
                        </div>
                    </>
                ) : (
                    <>
                        <Route exact path="/">
                            <Auth type={"login"} />
                        </Route>
                        <Route exact path="/signUp">
                            <Auth type={"signUp"} />
                        </Route>
                        <Route exact path="/login">
                            <Auth type={"login"} />
                        </Route>
                        <Redirect from="*" to="/" />
                    </>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;
