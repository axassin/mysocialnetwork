import { combineReducers } from 'redux';
import BookReducer from './book/reducer_books';
import ActiveBook from './book/reducer_active_book';
import WeatherReducer from './weather/reducer_weather';

const rootReducer = combineReducers({
	books: BookReducer,
	activeBook: ActiveBook,
	weather: WeatherReducer
})

export default rootReducer;