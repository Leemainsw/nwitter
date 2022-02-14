import React, { useState } from "react";
import { dbService } from "fbase";
import DropDown from "./DropDown";
import { useEffect } from "react";
import { displayedAt } from "services/functions";
import ImageModal from "dialog/ImageModal";

const Nweet = ({ nweetObj, isOwner, uid, creatorId }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const [dropDown, setDropDown] = useState(false);
    const [imageModal, setImageModal] = useState(null);
    const [user, setUser] = useState({});
    const defaultProfileImg =
        "https://pbs.twimg.com/profile_images/1478708274270990344/xdq3NWXh_400x400.jpg";

    useEffect(() => {
        const getData = async () => {
            const tmpUser = await dbService
                .collection("users")
                .doc(creatorId)
                .get();
            setUser(tmpUser.data());
        };

        getData();
    }, [creatorId]);

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
    const openImageModal = async () => {
        console.log(nweetObj);
        setImageModal(nweetObj.imageUrl ? nweetObj.imageUrl : null);
    };
    const closeImageModal = async () => setImageModal(null);

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
        <>
            <div className="nweet-item">
                <>
                    <div className="profile-img">
                        <img
                            src={
                                user.profile ? user.profile : defaultProfileImg
                            }
                            alt="profile"
                        />
                    </div>
                    <div className="text-box">
                        <div className="info-box">
                            <p>{user.name ? user.name : ""}</p>
                            <span>{displayedAt(nweetObj.createdAt)}</span>
                        </div>

                        <h4>{nweetObj.text}</h4>
                        {nweetObj.imageUrl && (
                            <div className="img-box">
                                <img
                                    src={nweetObj.imageUrl}
                                    onClick={openImageModal}
                                    alt="nweetImage"
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
                        {dropDown && <DropDown nweetObj={nweetObj} uid={uid} />}
                    </div>
                </>
            </div>
            {imageModal && (
                <ImageModal src={imageModal} close={closeImageModal} />
            )}
        </>
    );
};

export default Nweet;
