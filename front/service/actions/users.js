import * as API from '../../Api';
import { useCallback } from 'react';

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

export function updateUser(id) {
   return async (dispatch, getState) => {
    const { user } = getState().logguedUser;

    try {
      await API.User.updateprofil(id, payload);
      dispatch({
        type: UPDATE_USER,
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
