import {
	REQUEST_PROCESSING,
	REQUEST_SUCCESS,
	REQUEST_ERROR
} from '../actions/types.js';

const initialRequestState = {
	processing: false,
	error: false,
	success: false,
	language: 'EN' //has no use in this particular case
}

export default (state = initialRequestState, action) => {
	switch(action.type){
		case REQUEST_PROCESSING:
			return {...state, processing: true}
		case REQUEST_SUCCESS:
			return {...state, processing: false, success: true, language: action.payload}
		case REQUEST_ERROR:
			return {...state, processing: false, error: true}
		default:
			return state
	}
}

