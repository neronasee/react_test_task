import axios from 'axios';

import {
	REQUEST_PROCESSING,
	REQUEST_SUCCESS,
	REQUEST_ERROR
} from './types.js';

export const submitLogin = (Username, Password, cb) => {
	return dispatch => {
		dispatch({
			type: REQUEST_PROCESSING
		});

		axios.post('http://localhost:3001/login', {Username, Password})
			.then(response => {
				if(response.data.Auth === "Logged") {
					dispatch({type: REQUEST_SUCCESS, payload: response.data.Language});
				} else {
					dispatch({type: REQUEST_ERROR});
					if(cb) {
						cb();
					}
				}
			})
			.catch(response => {
				dispatch({
					type: REQUEST_ERROR
				})
			})
	}
}
