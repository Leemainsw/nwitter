import React from "react"
import { authService } from "fbase"
import { useHistory } from "react-router-dom";

import Header from "components/Profile/Header";

import 'css/Profile/Header.css';
import Info from "./Info";
import MyNweets from "./MyNweets";

const Profile = ({userObj}) => {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };
    
    return (
        <div className="profile-box">
            <Header userObj={userObj}/>
            <Info userObj={userObj}/>
            <MyNweets userObj={userObj} />
        </div>
    )
}
export default Profile;