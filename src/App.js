import React, { Component } from 'react';

import SearchBar from '../src/components/search-bar';
import YTSearch from 'youtube-api-search';
import PlayList from '../src/components/playlist';
import VideoDetails from '../src/components/video-detail';

const API_KEY = 'AIzaSyB_to4-u1rJpNEXlkOYGSQvb9ojlKoQC2A';

class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        videos: [],
        selectedVideo: null
      };

      this.videoSearch('React Tutorials');
    }

    videoSearch(term){
      YTSearch({key:API_KEY, term:term}, (data) =>{
        debugger;
        this.setState({
          videos:data, 
          selectedVideo: data[0]
        })
      })
    }

    render(){
      return (
        <div>
          <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
          <VideoDetails video={this.state.selectedVideo} />
          <PlayList 
          onVideoSelect={userSelected=>this.setState({selectedVideo:userSelected})}
          videos={this.state.videos}/>
        </div>
      );
    }
}

export default App;
