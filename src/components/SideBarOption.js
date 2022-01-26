import React from "react";
import { Link } from "react-router-dom";

const SideBarOption = ({text, path}) => {
    return (
        <>
            <li>
                <Link to={path}>{text}</Link>
            </li>
        </>
    );
};

export default SideBarOption;
