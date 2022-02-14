import React from 'react'

import 'css/Profile/Info.css'

const Info = () => {
    return (
        <div className="info-main">
            <img className="header-img" src="https://pbs.twimg.com/profile_banners/1477861986767872000/1641473483/600x200" alt="header-img"/>
            <div className="info-child">
                <div className="profile">
                    <img src="https://pbs.twimg.com/profile_images/1478708274270990344/xdq3NWXh_400x400.jpg" alt="profile-img"/>
                    <div></div>
                    <button type="button">프로필 수정</button>
                </div>
            </div>
        </div>
    )
}

export default Info;