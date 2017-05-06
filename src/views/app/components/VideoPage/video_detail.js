import React from 'react'
import CircularProgress from 'material-ui/CircularProgress';

const VideoDetail = ({video}) => {
	if(!video){
		return (
			<div>
				<CircularProgress />
			</div>
		)
	}
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div>
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
}

export default VideoDetail