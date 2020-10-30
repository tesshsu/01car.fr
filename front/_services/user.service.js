import { handleResponse } from './_services/service';
import {authHeader, jsonHeader} from '../_helpers';

export const userService = {
    login,
	logout,
	getById
};

function login(user) {
	const requestOptions = {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	};
    return fetch(process.env.REACT_APP_API_URL + '/WsAuth/1.1.0', requestOptions)
	.then(handleResponse)
	.then(res => {
		localStorage.setItem('userInfo', JSON.stringify(res));
		return res;
	});
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userInfo');
    return
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getById(idPersonne) {
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader(), ...jsonHeader() }
    };

    return fetch(`${process.env.REACT_APP_API_URL}/WsUser/1.11.0/${idPersonne}`, requestOptions).then(handleResponse);
}
