import React, { useState, useRef } from "react";

import { dbService, storageService } from "fbase";
import {v4 as uuidv4 } from 'uuid';

import "../css/WriteForm.css";

const WriteForm = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState();
    const [downloadUrl, setDownloadUrl] = useState("");
    const imageInput = useRef();

    const onSubmit = async (event) => {
        event.preventDefault();

        if (!nweet || nweet.lenght === 0) return false;

        if(attachment) uploadStorage();

        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            imageUrl: downloadUrl
        });

        setNweet("");
        setDownloadUrl('');
        setAttachment(null);
    };

    const uploadStorage = async () => {
        const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`)
        const response = await fileRef.putString(attachment, "data_url");
        const downloadUrlTmp = await response.ref.getDownloadURL();
        setDownloadUrl(downloadUrlTmp);
    }

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNweet(value);
    };

    const onFileChange = (event) => {
        const {
            target: { files },
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(theFile);
        reader.onload = (finishedEvent) => {
            setAttachment(finishedEvent.currentTarget.result);
        };
    };
    

    const onClearPhotoClick = () => { setAttachment(null); setDownloadUrl('') }

    const imageClick = () => imageInput.current.click();

    return (
        <div className="write-form">
            <div className="profile-box">
                <img
                    src="https://pbs.twimg.com/profile_images/1478708274270990344/xdq3NWXh_400x400.jpg"
                    alt="profile"
                />
            </div>
            <form onSubmit={onSubmit}>
                <input
                    value={nweet}
                    onChange={onChange}
                    type="text"
                    placeholder="무슨 일이 일어나고 있나요?"
                    maxLength={120}
                />

                {attachment && (
                    <div className="img-box">
                        <button onClick={onClearPhotoClick}>X</button>
                        <img
                            src={attachment}
                            alt="myImage"
                        />
                    </div>
                )}

                <div className="input-box">
                    <div className="button-box">
                        <button onClick={imageClick} type="button">
                            <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-image-interface-kiranshastry-gradient-kiranshastry.png"
                        width="20" height="20" alt="img-icon"/>
                        </button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                    </div>
                    <button type="submit" value="Nweet" className="btn-tweet">
                        트윗하기
                    </button>
                </div>
                {/* { attachment && 
                    <div>
                        <img src={attachment} width="50px" height="50px" alt="" />
                        <button onClick={onClearPhotoClick}>Clear</button>
                    </div>
                } */}
            </form>

            <input
                type="file"
                accept="image/*"
                ref={imageInput}
                onChange={onFileChange}
                hidden
            />
        </div>
    );
};

export default WriteForm;
