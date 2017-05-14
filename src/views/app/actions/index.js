import axios from 'axios';

const API_KEY = '878ce3f8c2593464c151641fe22029e1';
const  ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
const POSTS_URL = 'api/posts'

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ph`;
	const request = axios.get(url)

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}