import React, { Component } from 'react';

import BookList from '../../containers/Book/book_list';
import BookDetail from '../../containers/Book/book_detail';
export default class App extends Component {
	render() {
		return (
			<div>
				<BookList />
				<BookDetail />
			</div>
		)
	}
}