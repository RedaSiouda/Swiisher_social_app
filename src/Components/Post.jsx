// Post.jsx
import React, { useEffect, useState } from 'react';
import '../CSS/Post.css';
import axios from 'axios';
import { Avatar } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Post() {
  const [swiishData, setSwiishData] = useState({
    swiish: '',
    swiishPic: null,
    posts: [],
  });

  useEffect(() => {
    const fetchSwiish = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/v1/getSwiish');
        setSwiishData((prevState) => ({
          ...prevState,
          posts: response.data.posts || [],
        }));
      } catch (err) {
        console.log('Error in fetching data:', err);
      }
    };

    fetchSwiish();
  }, []);

  return (
    <div className="post">
      {swiishData.posts.map((data, index) => (
        <div key={index} className="post__container">
          <div className="post__header">
            <div className="postBox__containAvatar">
              <Avatar src="https://dogtime.com/wp-content/uploads/sites/12/2023/11/GettyImages-1198147566-e1701133343267.jpg?w=1024" />
            </div>
            <div className="post__userData">
              <p className="post__displayName">Dummy Test</p>
              <p className="post__userName">@Dummy test</p>
            </div>
            <div className="post__userOptions">
              <MoreHorizIcon style={{ fontSize: '30px' }} />
            </div>
          </div>
          <div className="post__content">
            <div className="post__swiishPic">
              {data.swiishPic && (
                <img
                  key={`${index}-img`}
                  src={data.swiishPic.startsWith('data:') ? data.swiishPic : `data:image/jpeg;base64,${data.swiishPic}`}
                  alt="swiish picture of animal"
                  className="post__img"
                />
              )}
            </div>
            <div className="post__swiish">
              <p className="post__displayName">Dummy Test:</p>
              <p className="post__text">{data.swiish}</p>
            </div>

            <div className="post__footer">
              <div className="post__likeComent">
                <FavoriteIcon />
                <ModeCommentIcon />
              </div>
              <div className="post__moreOption">
                <MoreVertIcon />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
