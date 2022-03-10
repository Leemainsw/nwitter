import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "fbase";
import { showErrorMessage } from "../../services/error";
import SocialLogin from "./SocialLogin";

import styled from "styled-components";

const LoginWrap = styled.main`
  margin: 0 auto;
  margin-top: 50px;
`;

const Title = styled.h3`
  margin: 0 auto;
  text-align: center;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 49px;
  color: #000;
`;

const Form = styled.form`
  width: 540px;
  height: 660px;
  margin: 0 auto;
  margin-top: 35px;

  box-shadow: 8px 8px 30px rgba(0, 0, 0, 0.1), -8px -8px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  background: white;

  @media (max-width: 800px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 120px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 70%;
  height: 80px;

  margin: 15px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  padding: 15px;
  background-color: #f0f0f0;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;

  margin-top: 50px;
`;

const Button = styled.button`
  margin: 5px;

  width: 150px;
  height: 50px;

  border-radius: 5px;
  background-color: #f0f0f0;

  outline: none;
  border: none;

  &:active {
    transform: scale(0.90);
  }
`;

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
      <LoginWrap>
        <Title>Login</Title>
        <Form onSubmit={onSubmit} type="hidden">
          <Box>
            <InputBox>
              <p>EMAIL</p>
              <Input
                name="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                value={email}
                onChange={onChange}
                required
              />
            </InputBox>
            <InputBox>
              <p>PASSWORD</p>
              <Input
                name="password"
                type="password"
                placeholder="이메일을 입력해주세요"
                value={password}
                onChange={onChange}
                required
              />
            </InputBox>
            <ButtonBox>
              <Button type="submit">Log In</Button>
              <Button onClick={goSignup}>Sign Up</Button>
            </ButtonBox>
            <SocialLogin />
          </Box>
        </Form>
      </LoginWrap>
    </>
  );
};

export default Login;
