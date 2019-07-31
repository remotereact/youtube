import React from 'react';
import './VideoItem.css';

const VideoItem = ({video,onVideoSelect}) => {

    return (
        <div id='side-bar'>
                        <div className='video-item item' onClick={() => onVideoSelect(video)} >
                            <div className='sidbarImage'>
                                <img className='itemImage' src={video.snippet.thumbnails.medium.url}
                                 alt={video.snippet.description}/>
                            </div>

                                <div className='content'>{video.snippet.title}</div>
                        </div>
        </div>
    )
};

export default VideoItem;