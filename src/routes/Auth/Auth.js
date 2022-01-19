import React from "react";
import Login from "routes/Auth/Login";
import SignUp from "routes/Auth/SignUp";
import "../../css/Auth.css";

const Auth = ({type}) => {
    return (
        <>
            <div className="bg-box">
                <div className="pink"></div>
                <div className="purple"></div>
                <div className="green"></div>
            </div>

            { type === 'login' ?   <Login /> : <SignUp/>}
        </>
    );
};

export default Auth;
