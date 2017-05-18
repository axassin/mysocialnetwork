import { FETCH_POSTS, CREATE_POST } from '../../actions/index'

export default (state = {}, action) => {
	switch(action.type) {
		case FETCH_POSTS:
			return action.payload.data
		// case CREATE_POST:
		// 	return action.payload.data
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