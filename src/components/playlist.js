import  React  from 'react'
import PlayListItems from './playlist-item'

const PlayList = (props)=>{
    const playlistItems = props.videos.map((video) =>{
        return(
            <PlayListItems 
                onUserSelected={props.onVideoSelect}
                key= {video.etag}
                video= {video}/>
        );
    });

    return(
        <ul className="col-md-4 list-group">
            {playlistItems}
        </ul>
    )
}

export default PlayList