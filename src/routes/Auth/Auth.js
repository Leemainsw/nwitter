import React from "react";
import Login from "routes/Auth/Login";
import SignUp from "routes/Auth/SignUp";
import "../../css/Auth.css";

const Auth = ({type}) => {
    return (
        <>
            { type === 'login' ?   <Login /> : <SignUp/>}
        </>
    );
};

export default Auth;
