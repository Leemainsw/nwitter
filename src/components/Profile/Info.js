import React, { useState, useEffect } from "react";
import { dbService,authService } from "fbase";
import { useHistory } from "react-router-dom";

import "css/Profile/Info.css";
import EditProfileDialog from "dialog/EditProfileDialog";

const Info = ({ userObj }) => {
    const history = useHistory();
    const [user, setUser] = useState({});
    const [editProfile, setEditProfile] = useState(false);
    const defaultProfileImg =
        "https://pbs.twimg.com/profile_images/1478708274270990344/xdq3NWXh_400x400.jpg";

    useEffect(() => {
        const getData = async () => {
            const tmpUser = await dbService
                .collection("users")
                .doc(userObj.uid)
                .get();
            setUser(tmpUser.data());
        };

        getData();
    }, [userObj]);

    // const openEditProfile = () => setEditProfile(true);
    const CloseEditProfile = () => setEditProfile(false);

    const dateFormat = (createDate) => {
        const date = new Date(createDate);
        return (
            date.getFullYear() +
            "년 " +
            date.getMonth() +
            "월" +
            date.getDate() +
            "일"
        );
    };

    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    }

    return (
        <div className="info-main">
            <img
                className="header-img"
                src="https://pbs.twimg.com/profile_banners/1477861986767872000/1641473483/600x200"
                alt="header-img"
            />
            <div className="info-child">
                <div className="profile">
                    <img src={user && user.profile ? user.profile : defaultProfileImg} alt="profile-img" />
                    <div></div>
                    {/* <button type="button" onClick={openEditProfile}>
                        프로필 수정
                    </button> */}
                    <button type="button" onClick={onLogOutClick}>
                        로그아웃
                    </button>
                </div>
                <div className="info-text-box">
                    <h2>{user && user.name ? user.name : ""}</h2>
                    <h3>{user && user.info ? user.info : ""}</h3>
                    <p>
                        <span>
                            link :{" "}
                            <a href="https://naver.com" target="#">
                                link
                            </a>
                        </span>
                        <span>
                            가입일 :{" "}
                            {user &&
                                user.createDate &&
                                dateFormat(user.createDate)}
                        </span>
                    </p>
                    <p>200 팔로우 중 181 팔로워</p>
                </div>
            </div>
            {editProfile && <EditProfileDialog onCancle={CloseEditProfile} />}
        </div>
    );
};

export default Info;
