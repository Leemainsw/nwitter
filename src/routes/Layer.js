import React from "react";

import SideBar from "components/SideBar";
import Home from "routes/Home";

import "../css/Layer.css";
const Layer = ({ userObj }) => {
    return (
        <>
            <div className="layer-box">
                <div className="side-box">
                    <SideBar />
                </div>
                <div className="main-box">
                    <Home userObj={userObj} />
                </div>
            </div>
        </>
    );
};

export default Layer;
