import React from "react";
import { authService, firebaseInstance } from "fbase";

import styled from "styled-components";

import GoogleImg from '../../assets/img/google.png';
import GithubImg from '../../assets/img/github.png';
import kakaoImg from '../../assets/img/kakao.png';
import twitterImg from '../../assets/img/twitter.png';

const SocialBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;

  outline: none;
  border: none;
  background-color: transparent;

  &:nth-child(1) {
    background-image: url('${GoogleImg}');
  }

  &:nth-child(2) {
    background-image: url('${GithubImg}');
  }

  &:nth-child(3) {
    background-image:  url('${kakaoImg}');
  }

  &:nth-child(4) {
    background-image: url('${twitterImg}');
  }

  &:active {
    box-shadow: 2px 2px 0 rgba(97, 96, 96, 0.5);
    position: relative;
    top: 2px;
  }
`;

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
      <SocialBox>
        <Button onClick={onSocialClick} name="google"></Button>
        <Button onClick={onSocialClick} name="github"></Button>
        {/* <Button onClick={onSocialClick} name="kakao"></Button> */}
        {/* <Button onClick={onSocialClick} name="twitter"></Button> */}
      </SocialBox>
    </>
  );
};

export default SocialLogin;
