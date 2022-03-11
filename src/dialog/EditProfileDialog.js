import React from "react";
import styled from "styled-components";

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
`;

const ModalBox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    background: white;
    width: 40%;
    height: auto;
    top: 20%;
    left: 50%;
    border-radius: 25px;
    transform: translate(-50%, -50%);
    z-index: 2;
`;

const CancelButton = styled.button`
    text-align: center;
    border: none;
    background: rgba(128, 128, 128, 0.719);
    border-radius: 50px;
`;

const UpdateButton = styled.button`
    text-align: center;
    border-radius: 30px;
    width: 50px;
    height: 25px;
    border: 1px solid #eee;
    background-color: #ffffff;
`;

const ModalHeader = styled.header`
    width: 100%;
    height: 50px;
    background-color: rgba(128, 128, 128, 0.719);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;
`;

const ModalMain = styled.main`
    width: 100%;
    height: auto;
    background-color: #ffffff;
`;

const EditProfileDialog = ({ onCancle }) => {
    return (
        <Modal>
            <ModalBox>
                <ModalHeader>
                    <CancelButton onClick={onCancle}>X</CancelButton>
                    <strong>프로필 수정</strong>
                    <UpdateButton onClick={onCancle}>저장</UpdateButton>
                </ModalHeader>
                <ModalMain>
                    <img
                        className="header-img"
                        src="https://pbs.twimg.com/profile_banners/1477861986767872000/1641473483/600x200"
                        alt="header-img"
                    />
                </ModalMain>
            </ModalBox>
        </Modal>
    );
};

export default EditProfileDialog;
