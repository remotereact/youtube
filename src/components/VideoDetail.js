 import React from 'react';
 import './VideoDetail.css';


const VideoDetail = ({ video }) => {
    if (!video){
        return <div>loading...</div>
    }
    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

    return (
        <div className='main-video'>

            <div >
                <iframe className='iframe' title='video player' src={videoSrc}/>
            </div>

            <div className="container segment-ui">
                <h4 className='ui-header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>

        </div>
    )
};

export default VideoDetail;