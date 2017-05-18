import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions'
import { Link } from 'react-router-dom';

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPostList() {
		return _.map(this.props.posts, (post) => {
			const url = `posts/${post._id}`
			return (
				<li key={post._id} className="list-group-item">
					<Link to={url}>
						{post.title}
					</Link>
				</li>
			)	 
		})
	}
	
	render() {
		return (
			<ul>
				{this.renderPostList()}
			</ul>
		)
	}
}

function mapStateToProps({posts}){
	return {posts}
}

export default connect(mapStateToProps, { fetchPosts } )(PostList)
