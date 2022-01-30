import React, {useState, useEffect} from 'react';

import {dbService} from 'fbase';

import Nweet from './Nweet';

import '../css/Nweets.css'

const Nweets = ({userObj}) => {
    const [nweets , setNweets] = useState([]);

    useEffect(()=>{
        dbService.collection("nweets").orderBy('createdAt', 'desc').onSnapshot((snapshot) => {
            const nweets = snapshot.docs;

            if(!nweets || nweets.length === 0) {
                setNweets([])
                return false;
            }

            const nweetArray = nweets.map(doc=>({
                id: doc.id, 
                ...doc.data(),
            }));
            
            setNweets(nweetArray);
        });   
    }, [])


    return(
        <div className="nweet-list">
            {nweets.map((nweet, index) => (
                <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid} uid={userObj.uid} />
            ))}
        </div>
    )
}

export default Nweets;