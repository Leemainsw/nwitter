import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <>
            <div className="logo"></div>
            <ul className="menu-box">
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/">탐색하기</Link>
                </li>
                <li>
                    <Link to="/">알림</Link>
                </li>
                <li>
                    <Link to="/">쪽지</Link>
                </li>
                <li>
                    <Link to="/">북마크</Link>
                </li>
                <li>
                    <Link to="/">리스트</Link>
                </li>
                <li>
                    <Link to="/profile">프로필</Link>
                </li>
            </ul>

            <div className="bottom">
                <button>트윗하기</button>
            </div>

            {/* <nav>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/profile">My Profile</Link>
        </li>
    </ul>
</nav>; */}
        </>
    );
};

export default SideBar;
