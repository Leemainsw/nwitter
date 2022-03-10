import React, {useState} from "react";
import SideBarOption from "./SideBarOption";
import WriteFormDialog from "dialog/WriteFormDialog";

const SideBar = ({userObj}) => {    
    const [writeModal, setWriteModal] = useState(null);

    const onCancle = () => setWriteModal(null);

    return (
        <div className="side-box">
            <div className="logo"></div>
            <ul className="menu-box">
                <SideBarOption text={"홈"} path={"/"} />
                {/* <SideBarOption text={"탐색하기"} path={"/"} /> */}
                {/* <SideBarOption text={"알림"} path={"/"} /> */}
                {/* <SideBarOption text={"쪽지"} path={"/"} /> */}
                {/* <SideBarOption text={"북마크"} path={"/"} /> */}
                {/* <SideBarOption text={"리스트"} path={"/"} /> */}
                <SideBarOption text={"프로필"} path={"/profile"} />
            </ul>

            <div className="bottom">
                <button onClick={() =>setWriteModal(true)}>트윗하기</button>
            </div>

            {writeModal && <WriteFormDialog userObj={userObj} onCancle={onCancle}/>}
        </div>
    );
};

export default SideBar;
