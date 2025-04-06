// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/


type Props = {
    username: string;
    content: string;
    likes: number;
    timestamp: string;
  };


const Tweet: React.FC<Props> = ({username, content, likes, timestamp}) => {

    /*use state for liked and like count to allow for us to keep track */
    const [liked, setLike] = useState(false);
    const [likeCnt, setLikeCnt] = useState(likes);

    const likeButton= ()=> 
        {
        setLike(!liked);
        setLikeCnt((prev)=> (liked ?prev - 1 : prev +1));
    };

    return (

        <div className="tweet">
        <h3>@{username}</h3>
        <p>{content}</p>
        <small>{timestamp} ago</small>
        <br />
        <button onClick={likeButton}>
            {liked ? '❤️' : '🤍'} {likeCnt}
        </button>
        </div>

    );
    
};


export default Tweet;
