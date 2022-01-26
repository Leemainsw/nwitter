import React, {useEffect, useState} from "react"

import {dbService} from 'fbase';

import Nweet from "components/Nweet";
import WriteForm from "components/WriteForm";
import Header from "components/Header";
import Nweets from "components/Nweets";

const Home = ({userObj}) => {

    useEffect(()=>{    
        // getNweets();
        // dbService.collection("nweets").onSnapshot((snapshot) => {
        //     const nweets = snapshot.docs;
        //     if(!nweets || nweets.length === 0) return false;

        //     const nweetArray = nweets.map(doc=>({
        //         id:doc.id, 
        //         ...doc.data(),
        //     }));

        //     setNweets(nweetArray);
        // });
    }, []);
  
    // const onChange = (event) => {
    //     const {target: {value},} = event;
    //     setNweet(value);
    // };

    // const onFileChange = (event) => {
    //     const {
    //         target:{files}
    //     } = event;
    //     const theFile = files[0]; 
    //     const reader = new FileReader();
    //     reader.readAsDataURL(theFile);
    //     reader.onload = (finishedEvent) => {
    //         setAttachment(finishedEvent.currentTarget.result);
    //     }
    // };

    // const onClearPhotoClick = () => setAttachment(null);

    return (
        <div className="main-box">
            <Header />
            {/* 입력 폼 */}
            <WriteForm userObj={userObj}/>
            <Nweets userObj={userObj}></Nweets>

            {/* 트윗 스크롤 창 */}
            {/* <form onSubmit={onSubmit}>
                <input value={nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
                <input type="file" accept="image/*" onChange={onFileChange} />
                <input type="submit" value="Nweet" />
                { attachment && 
                    <div>
                        <img src={attachment} width="50px" height="50px" />
                        <button onClick={onClearPhotoClick}>Clear</button>
                    </div>
                }
            </form> 
            */}


            {/* <div>
                {nweets.map((nweet) => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid}/>
                ))}
            </div> */}
        </div>
    );
};

export default Home;