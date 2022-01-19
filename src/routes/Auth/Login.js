import { authService } from "fbase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { showErrorMessage } from "../../services/error";

import SocialLogin from "./SocialLogin"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;

        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await authService.signInWithEmailAndPassword(
                email,
                password
            );
            console.log("data : ", data);
        } catch (err) {
            const errMsg = showErrorMessage(err.code);
            alert(errMsg.subTitle);
        }
    };

    const goSignup = () => {
        history.push("/signUp");
    };

    return (
        <>
            <div className="Login">
                <div className="login-wrap">
                    <h3>Login</h3>
                    <form onSubmit={onSubmit} type="hidden">
                        <div className="box">
                            <div className="input-box">
                                <p>EMAIL</p>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="이메일을 입력해주세요"
                                    value={email}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="input-box">
                                <p>PASSWORD</p>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="이메일을 입력해주세요"
                                    value={password}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="btn-box">
                                <button type="submit">Log In</button>
                                <button onClick={goSignup}>Sign Up</button>
                            </div>
                            <SocialLogin />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
