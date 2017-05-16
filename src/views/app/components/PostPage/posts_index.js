import React, { Component } from 'react';
import PostList from '../../containers/Post/posts_list';
import { Link } from 'react-router-dom';

class Post extends Component {
	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new">
						Add new Post
					</Link>
				</div>
				<PostList />
			</div>
		)
	}
}

export default Post