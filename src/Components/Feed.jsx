import React from 'react';
import PostBox from './PostBox';
import '../CSS/Feed.css';
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
        <div className="feed__header">
            <div className="feed__title">swiisher</div>
            <div className="feed__slogan"><i>To show than, yes, your pet is the cutest,</i></div>
        </div>
        <div className="feed__containPostbox">
            <PostBox />
        </div>
        <div className="feed__feed">
             <Post/> 
        </div>
    </div>
  )
}

export default Feed
