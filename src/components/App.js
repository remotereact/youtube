import React,{Component} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';



const KEY = 'AIzaSyDnLcvhZgRmFGyhcSm1dsfbfeXFCZUSYRc';
class App extends Component{
    state = {videos: [], selectedVideo: null};

    onTermSubmit = async (term) => {
      const response = await youtube.get('/search',{
            params:{
                part: 'snippet',
                q: term,
                key: KEY
             }
        });
      console.log(response);
      this.setState({videos: response.data.items})
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };

    render() {
        return (
            <div className='container'>
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className='grid-layout'>

                    <div className='video-detail'>
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>

                    <div>
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;