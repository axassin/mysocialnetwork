import axios from 'axios';

const API_KEY = '878ce3f8c2593464c151641fe22029e1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
const POSTS_URL = 'api/posts'

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ph`;
	const request = axios.get(url)

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}

export function fetchPosts() {
	const request = axios.get(POSTS_URL);

	return {
		type : FETCH_POSTS,
		payload: request
	}
}

export function createPost(data, callback) {
	const request = axios.post(POSTS_URL, data)
		.then(() => { callback() })
		.catch((err) => console.log("Ga error gali",err));

	return {
		type: CREATE_POST,
		payload: request
	}
}

export function fetchPost(id) {
	const request = axios.get(`${POSTS_URL}/${id}`)
	return {
		type: FETCH_POST,
		payload: request
	}
}

export function deletePost(id, callback) {
	const request = axios.delete(`${POSTS_URL}/${id}`)
		.then(()=> {
			console.log("deleted",id);
			callback();
		})
		.catch(err => console.log(err));

	return {
		type: DELETE_POST,
		payload: request
	}
}

