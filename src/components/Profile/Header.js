import React, { useEffect, useState } from "react";

import { BACK_ICON } from "assets/IMAGE_SRC";
import { dbService } from "fbase";
import "css/Profile/Header.css";

const Header = ({ userObj }) => {
    const [user, setUser] = useState({});
    const [nweetLength, setNweetLength] = useState(0)

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

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="profile-header">
            <button type="button" onClick={goBack}>
                <img src={BACK_ICON} alt="back-icon" />
            </button>
            <div className="text-box">
                {user && user.name && <span>{user.name}</span>}
                <span className="bottom-text">{nweetLength} 트윗</span>
            </div>
        </div>
    );
};

export default Header;
