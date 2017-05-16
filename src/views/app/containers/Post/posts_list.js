import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions'

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPostList() {
		return _.map(this.props.posts, (post) => {
			return (
				<li key={post._id} className="list-group-item">
					{post.title}
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
