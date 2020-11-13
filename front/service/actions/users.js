import * as API from '../../Api';
import { useCallback } from 'react';

export const SET_USERS = 'users/SET_USERS';
export const UPDATE_USER = 'users/UPDATE_USER';
export const FETCH_USER = 'users/FETCH_USER'

export function fetchUser(id) {
  return async (dispatch) => {
    try {
      const user = await API.User.getUser(id);

      dispatch({
        type: FETCH_USER,
        payload: {
          user
        }
      });
    } catch (err) {
      console.warn(err);
      throw err;
    }
  };
}

export function setUsers(users = {}) {
  return {
    type: SET_USERS,
    payload: {
      users
    }
  };
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: {
      user
    }
  };
}
