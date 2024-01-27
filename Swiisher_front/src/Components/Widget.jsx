import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import '../CSS/Widget.css';

const Widget = () => {
  return (
    <div className="widget">

    <div className="widget__header">
      <h2 className="widget__title">Discover more pets:</h2>
    </div>
    <br/>
    <div className="widget__containTimeLine">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="dog_rates"
          options={{ height: 150 }}
          className='widget__tweet'
        />
        <br/>
        <br/>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="catsofinstagram"
          options={{ height: 150 }}
          className='widget__tweet'
        />
         

    </div>
    </div>
  );
}

export default Widget;
