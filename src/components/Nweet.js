import React, { useState } from "react";
import { dbService } from "fbase";
import DropDown from "./DropDown";

const Nweet = ({ nweetObj, isOwner, uid }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const [dropDown, setDropDown] = useState(false);

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
        <div className="nweet-item">
            {editing ? (
                <>
                    {isOwner && (
                        <>
                            <form onSubmit={onSubmit}>
                                <input
                                    onChange={onChange}
                                    type="text"
                                    placeholder="Edit your nweet"
                                    value={newNweet}
                                    required
                                />
                                <input type="submit" value="Update Nweet" />
                            </form>
                            <button onClick={toggleEditing}>Cancel</button>
                        </>
                    )}
                </>
            ) : (
                <>
                    <div className="profile-img">
                        <img
                            src="https://pbs.twimg.com/profile_images/1478708274270990344/xdq3NWXh_400x400.jpg"
                            alt="profile"
                        />
                    </div>
                    <div className="text-box">
                        <p>김솨솨</p>
                        <h4>{nweetObj.text}</h4>
                        {isOwner && (
                            <>
                                {/* 
                                    <button onClick={onDeleteClick}>
                                        Delete Nweet
                                    </button>
                                    <button onClick={toggleEditing}>Edit Nweet</button> 
                                */}
                            </>
                        )}
                        {nweetObj.imageUrl && (
                            <div className="img-box">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/nwitter-8a8b4.appspot.com/o/u9Qiou6JKGb9SIkJx4W4XBcdafm2%2F91885264-25a9-492e-854b-ca51b2cff43b?alt=media&token=aa53ca31-5d16-48f2-a195-dd41180b2a63"
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
            )}
        </div>
    );
};

export default Nweet;
