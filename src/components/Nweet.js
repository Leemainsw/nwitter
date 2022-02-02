import React, { useState } from "react";
import { dbService } from "fbase";
import DropDown from "./DropDown";
import { useEffect } from "react";

const Nweet = ({ nweetObj, isOwner, uid }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const [dropDown, setDropDown] = useState(false)
    const [user, setUser] = useState({});

    useEffect(()=>{
        const getData = async () => {
            const tmpUser = await dbService.collection("users").doc(uid).get();
            setUser(tmpUser.data());
        }

        getData();
    }, [uid])

    // const onDeleteClick = async () => {
    //     const ok = window.confirm(
    //         "Are you sure you want to delete this nweet?"
    //     );
    //     if (ok) {
    //         await dbService.doc(`nweets/${nweetObj.id}`).delete();
    //     }
    // };

    const toggleEditing = async () => setEditing((prev) => !prev);
    const toggleDropDown = async () => setDropDown(!dropDown);
    const closeDropDown = async () => setDropDown(false);
    
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`nweets/${nweetObj.id}`).update({
            text: newNweet,
        });
        setEditing(false);
    };
    
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewNweet(value);
    };

    return (
        <div className="nweet-item" >
                <>
                    <div className="profile-img">
                        <img
                            src="https://pbs.twimg.com/profile_images/1478708274270990344/xdq3NWXh_400x400.jpg"
                            alt="profile"
                        />
                    </div>
                    <div className="text-box">
                        <p>{user.name ? user.name : ''}</p>
                        <h4>{nweetObj.text}</h4>
                        {nweetObj.imageUrl && (
                            <div className="img-box">
                                <img
                                    src={nweetObj.imageUrl}
                                    alt="ggimdsf"
                                />
                            </div>
                        )}

                        <div className="bottom-box">
                            <button className="comment">멘션</button>
                            <button className="retweet">리트윗</button>
                            <button className="like">좋아요</button>
                            <button className="upload">업로드</button>
                        </div>
                    </div>
                    <div className="more">
                        <button type="button" onClick={toggleDropDown}>
                            <img
                                src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/40/000000/external-more-interface-kiranshastry-gradient-kiranshastry.png"
                                alt="more-btn"
                            />
                        </button>
                        {
                            dropDown && <DropDown nweetObj={nweetObj} uid={uid} />
                        }
                    </div>
                </>
        </div>
    );
}

export default Nweet;
