import React, { Component } from 'react';

import BookList from '../../containers/BookPage/book_list';
import BookDetail from '../../containers/BookPage/book_detail';
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