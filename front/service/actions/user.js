import {authHeader, jsonHeader} from '../../api/authRequest';
import * as API from "../../api";
import {update} from "./loggedUser";
// Create Redux action types
export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'
export const UPDATE_USER = 'GET_USER_UPDATE'
export const UPDATE_USER_FAILURE = 'UPDATE_USER_UPDATE'
// Create Redux action creators that return an action
export const getUser = () => ({
  type: GET_USER,
})

export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
})

export const getUserFailure = () => ({
  type: GET_USER_FAILURE,
})

export const updateUserInfo = (id, user) => ({
  type: UPDATE_USER,
  payload: user,
})

export const updateUserFailure = () => ({
  type: UPDATE_USER_FAILURE,
})

// Combine them all in an asynchronous thunk

export function fetchUser() {
  const requestOptions = {
        headers: { ...authHeader(), ...jsonHeader() }
    };

  return async (dispatch) => {
    dispatch(getUser())

    try {
      const response = await fetch('https://api.01car.fr/api/v1/profil', requestOptions)
      const data = await response.json()

      dispatch(getUserSuccess(data))
    } catch (error) {
      dispatch(getUserFailure())
    }
  }
}


export function updateUser(data) {
    const requestOptions = {
        method: 'PATCH',
        headers: { ...authHeader(), ...jsonHeader() }
    };

    return async (dispatch, getState) => {
        const { user } = getState().loggedUser;
        //dispatch(getUser())

        try {
          const response = await fetch('https://api.01car.fr/api/v1/profil', requestOptions);

          const data = await response.json();

          dispatch(updateUserInfo(user.id, data))
        } catch (error) {
          dispatch(updateUserFailure())
        }
  }
}

