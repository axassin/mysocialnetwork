import { FETCH_POSTS, CREATE_POST, FETCH_POST } from '../../actions/index'
import _ from 'lodash';


export default (state = {}, action) => {
	switch(action.type) {
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, '_id')
		case FETCH_POST:
			return {...state, [action.payload.data._id]: action.payload.data}
		default:
			return state
	}
}

// export default function(state = null, action) {
// 	switch(action.type) {
// 		case 'BOOK_SELECTED':
// 			return action.payload;
		
// 	}
// 	return state
// }