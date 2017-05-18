import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {createPost} from '../../actions'

class PostNew extends Component {
	renderField(field) {
		const { meta : { touched, error } , label, input } = field
		const className = `form-group ${touched && error ? 'has-error':''}`
		return (
			<div className={className}>
				<label>{label}</label>
				<input
					className="form-control"
					type="text"
					{...input}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		)
	}

	onSubmit(values) {
		this.props.createPost(values , () => {
			this.props.history.push('/');
		})
	}
	
	render() {
		const { handleSubmit } = this.props
		return (
			<div>
				<div>
					<h1>PostNew</h1>
				</div>
				<div>
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<Field
							label="Title"
							name="title"
							component={this.renderField}
						/>
						<Field
							label="Message"
							name="message"
							component={this.renderField}
						/>
						<button type="submit" className="btn btn-primary">Submit</button>
						<Link className="btn btn-primary" to="/">Cancel</Link>
					</form>
				</div>
			</div>
		)
	}
}

function validate(value) {
	const error = {}
	if(!value.title) {
		error.title = "Enter a title"
	}
	if(!value.message) {
		error.message = "Enter a message"
	}
	return error
}

export default reduxForm({
	validate,
	form:"PostNewForm"
})(
	connect(null, { createPost })(PostNew)
)