import React, { useState } from "react";
import { dbService } from "fbase";
import DropDown from "./DropDown";
import { useEffect } from "react";
import { displayedAt } from "services/functions";
import ImageModal from "dialog/ImageModal";

import * as firebase from "firebase/app";

const Nweet = ({ nweetObj, isOwner, uid, creatorId }) => {
  const [dropDown, setDropDown] = useState(false);
  const [imageModal, setImageModal] = useState(null);
  const [user, setUser] = useState({});
  const defaultProfileImg =
    "https://pbs.twimg.com/profile_images/1478708274270990344/xdq3NWXh_400x400.jpg";
  const heartDefaultImg =
    "https://firebasestorage.googleapis.com/v0/b/nwitter-8a8b4.appspot.com/o/Default%2Fheart-default.png?alt=media&token=7927f8b0-733f-40cc-8991-4e08b2a3f432";
  const heartFullImg =
    "https://firebasestorage.googleapis.com/v0/b/nwitter-8a8b4.appspot.com/o/Default%2Fheart-full.png?alt=media&token=1631e657-93d5-4910-90a2-719366a2a4e9";
  const commentImg =
    "https://firebasestorage.googleapis.com/v0/b/nwitter-8a8b4.appspot.com/o/Default%2Fcomment.png?alt=media&token=253a9c72-3c08-4958-923e-f8d2193702c6";
  const reNweetImg =
    "https://firebasestorage.googleapis.com/v0/b/nwitter-8a8b4.appspot.com/o/Default%2Frenweet.png?alt=media&token=493b8c32-2126-4d7c-b192-19f3c3fcfde7";
  const shareImg =
    "https://firebasestorage.googleapis.com/v0/b/nwitter-8a8b4.appspot.com/o/Default%2Fshare.png?alt=media&token=27722b17-9aac-41cc-a93c-06225c9f8c30";

  useEffect(() => {
    const getData = async () => {
      const tmpUser = await dbService.collection("users").doc(creatorId).get();
      setUser(tmpUser.data());

      console.log(tmpUser.data());
    };

    getData();
  }, [creatorId]);

  const toggleDropDown = async () => setDropDown(!dropDown);

  const openImageModal = async () =>
    setImageModal(nweetObj.imageUrl ? nweetObj.imageUrl : null);

  const closeImageModal = async () => setImageModal(null);

  const likeBtn = () => {
    const likeArray = nweetObj.like;

    if (!likeArray || likeArray.length === 0) {
      dbService
        .collection("nweets")
        .doc(nweetObj.id)
        .update({
          like: firebase.firestore.FieldValue.arrayUnion(uid),
        });

      return true;
    }

    const find = likeArray.find((ele) => ele === uid);

    if (find) {
      dbService
        .collection("nweets")
        .doc(nweetObj.id)
        .update({
          like: firebase.firestore.FieldValue.arrayRemove(uid),
        });

      return true;
    } else {
      dbService
        .collection("nweets")
        .doc(nweetObj.id)
        .update({
          like: firebase.firestore.FieldValue.arrayUnion(uid),
        });

      return true;
    }
  };

  const heartImg = () => {
    const likeArray = nweetObj.like;

    if (!likeArray || likeArray.length === 0) {
      return heartDefaultImg;
    }

    const find = likeArray.find((ele) => ele === uid);

    if (find) {
      return heartFullImg;
    } else {
      return heartDefaultImg;
    }
  };

  return (
    <>
      <div className="nweet-item">
        <>
          <div className="profile-img">
            <img
              src={user && user.profile ? user.profile : defaultProfileImg}
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
              {/* <button className="comment">
                <img src={commentImg} alt="comment" />
              </button>
              <button className="retweet">
                <img src={reNweetImg} alt="reNweet" />
              </button> */}
              <button className="like" onClick={likeBtn}>
                <img src={heartImg()} alt="heart-default" />
              </button>
              <p>{nweetObj.like && nweetObj.like.length ? nweetObj.like.length : ''}</p>
              {/* <button className="upload">
                <img src={shareImg} alt="share" />
              </button> */}
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
      {imageModal && <ImageModal src={imageModal} close={closeImageModal} />}
    </>
  );
};

export default Nweet;
