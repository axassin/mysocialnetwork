import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const VideoListItem = ({video, onVideoSelect}) => {

	const imgUrl = video.snippet.thumbnails.default.url
	
	return (
		<div>
			<ListItem onClick={() => onVideoSelect(video)}>
				<div className="video-list media">
					<div className="media-left">
						<img className="media-object" src={imgUrl}/>
					</div>
					<div className="media-body">
						<div className="media-heading">
							{video.snippet.title}
						</div>
					</div>
				</div>
				<Divider inset={true} />
			</ListItem>
		</div>
	)
}

export default VideoListItem