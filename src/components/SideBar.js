import React from "react";
import SideBarOption from "./SideBarOption";

const SideBar = () => {
    return (
        <div className="side-box">
            <div className="logo"></div>
            <ul className="menu-box">
                <SideBarOption text={"홈"} path={"/"} />
                <SideBarOption text={"탐색하기"} path={"/"} />
                <SideBarOption text={"알림"} path={"/"} />
                <SideBarOption text={"쪽지"} path={"/"} />
                <SideBarOption text={"북마크"} path={"/"} />
                <SideBarOption text={"리스트"} path={"/"} />
                <SideBarOption text={"프로필"} path={"/profile"} />
            </ul>

            <div className="bottom">
                <button>트윗하기</button>
            </div>
        </div>
    );
};

export default SideBar;
