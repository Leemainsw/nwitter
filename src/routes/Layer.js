import React from "react";

import SideBar from "components/SideBar";
import Home from "routes/Home";

import "../css/Layer.css";
const Layer = ({ userObj }) => {
    return (
        <>
            <div className="layer-box">
                <SideBar />
                <Home userObj={userObj} />
            </div>
        </>
    );
};

export default Layer;
