import { authService, firebaseInstance } from "fbase";
import React from "react";

const SocialLogin = () => {
    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event;

        let provider;

        switch (name) {
            case "google":
                provider = new firebaseInstance.auth.GoogleAuthProvider();
                break;

            case "github":
                provider = new firebaseInstance.auth.GithubAuthProvider();
                break;

            case "kakao":
                // 카카오 로그인 추가
                break;

            case "twitter":
                // 트위터 로그인 추가
                break;

            default:
                return false;
        }

        const data = await authService.signInWithPopup(provider);
        console.log(data);
    };

    return (
        <>
            <div className="social-box">
                <button onClick={onSocialClick} name="google"></button>
                <button onClick={onSocialClick} name="github"></button>
                <button onClick={onSocialClick} name="kakao"></button>
                <button onClick={onSocialClick} name="twitter"></button>
            </div>
        </>
    );
};

export default SocialLogin;
