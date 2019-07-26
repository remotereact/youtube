import React from 'react';
import './VideoItem.css';

const VideoItem = ({video,onVideoSelect}) => {

    return (
        <div id='side-bar'>
                        <div className='video-item item' onClick={() => onVideoSelect(video)} >
                            <img className='item-image' src={video.snippet.thumbnails.medium.url}
                                 alt={video.snippet.description}/>
                            <div className='content'>
                                <div>{video.snippet.title}</div>
                            </div>
                        </div>

        </div>
    )
};

export default VideoItem;