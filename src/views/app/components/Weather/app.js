import React, { Component } from 'react';

import SearchBar from '../../containers/Weather/search_bar';
import WeatherList from '../../containers/Weather/weather_list';

export default class App extends Component {
	render() {
		return (
			<div>
				<SearchBar />
				<WeatherList />
			</div>
		)
	}
}