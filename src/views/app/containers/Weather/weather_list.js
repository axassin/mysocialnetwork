import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/Weather/chart';
import GoogleMap from '../../components/Weather/google_map';

class WeatherList extends Component {

	renderWeather(cityData){
		const city = cityData.city
		const temps = cityData.list.map(weather => weather.main.temp)
		const humidities = cityData.list.map(weather => weather.main.humidity)
		const pressures = cityData.list.map(weather => weather.main.pressure)
		const { lat, lon } = city.coord
		return (
			<tr key={city.id}>
				<td><GoogleMap lat={lat} lon={lon} /></td>
				<td><Chart data={temps} color="yellow" /></td>
				<td><Chart data={humidities} color="blue" /></td>
				<td><Chart data={pressures} color="red" /></td>
			</tr>
		)
	}

	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({weather}) {
	return { weather }
}

export default connect(mapStateToProps)(WeatherList)