import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

// const SearchBar = () => {
// 	return <input />
// }

class SearchBar extends Component {
	constructor() {
		super();
		this.state = {
			term : ''
		}
	}
	render() {
		return  (
			<div className="search-bar">
				<TextField
					hintText="Seach Video" 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
					
				/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term})
		this.props.onVideoSearch(term)
	}
}
export default SearchBar
// {this.props.onVideoSearch(this.state.term)}