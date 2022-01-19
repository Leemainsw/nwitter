import { authService } from "fbase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { showErrorMessage } from "../../services/error";

import SocialLogin from "./SocialLogin"

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const history = useHistory();

    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;

        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "name") {
            setName(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await authService.createUserWithEmailAndPassword(
                email,
                password
            );
            console.log("data : ", data);
        } catch (err) {
            const errMsg = showErrorMessage(err.code);
            alert(errMsg.subTitle);
        }
    };

    const goLogin = () => {
        history.push("/login");
    };

    return (
        <>
            <div className="Login">
                <div className="login-wrap">
                    <h3>SignUp</h3>
                    <form onSubmit={onSubmit}>
                        <div className="box" style={{ paddingTop: "10px" }}>
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
                            <div className="input-box">
                                <p>NAME</p>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="이름을 입력해주세요"
                                    value={name}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="btn-box">
                                <button type="submit">Sign Up</button>
                                <button onClick={goLogin}>Log In</button>
                            </div>
                            <SocialLogin />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;
