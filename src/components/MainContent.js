import React from "react"
import Home from "components/Home/Home";

const MainContent = ({userObj}) => {

    return (
        <>
            <Home userObj={userObj} />
        </>
    )
}

export default MainContent;