import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchPost, deletePost} from '../../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component {
	
	
	componentDidMount() {
		const { id } = this.props.match.params
		this.props.fetchPost(id);
	}

	deletePost() {
		const { id } = this.props.match.params
		this.props.deletePost(id, () => {
			this.props.history.push('/');
		})
	}

	render() {
		const post = this.props.post
		if(!post) {
			return <div>Loading</div>
		}
		return (
			<div>
				<Link to="/">Back</Link>
				<h1>Title:</h1>{post.title}
				<h1>Message:</h1>{post.message}
				<div>
					<button type="button" className="btn btn-danger" onClick={this.deletePost.bind(this)}>Delete</button>
				</div>
			</div>
		)
	}

}

function mapToStateProps({posts}, ownProps) {
	return {post : posts[ownProps.match.params.id]}
}

export default connect(mapToStateProps, {fetchPost, deletePost})(PostShow)