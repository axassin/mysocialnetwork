import { combineReducers } from 'redux';
import BookReducer from './book/reducer_books';
import ActiveBook from './book/reducer_active_book';
import WeatherReducer from './weather/reducer_weather';
import PostReducer from './post/reducer.js';
import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
	form: FormReducer,
	books: BookReducer,
	activeBook: ActiveBook,
	weather: WeatherReducer,
	posts: PostReducer
})

export default rootReducer;