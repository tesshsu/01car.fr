import * as API from '../../api';
import * as LOADING_OVERLAY_ACTIONS from './loadingOverlay';
import { useCallback } from 'react';

export const LOGIN = 'loggedUser/LOGIN';
export const LOGOUT = 'loggedUser/LOGOUT';
export const UPDATE = 'loggedUser/UPDATE';
export const FETCH = 'loggedUser/FETCH';


export function login({ email, password }) {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Connexion...'));
    try {
      const { token, user } = await API.Auth.login({ email, password });
      await localStorage.setItem('ACCESS_TOKEN', token);
      dispatch({
        type: LOGIN,
        payload: {
          user
        }
      });
    } catch (err) {
      await dispatch({ type: LOGOUT });
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function forget_password({ email }) {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Sending...'));
    try {
      await API.Auth.forget_password({ email });
      await dispatch(fetch());
    } catch (err) {
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function modify_password( password ) {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Sending...'));
    try {
      await API.Auth.modify_password({ password });
      await dispatch(fetch());
    } catch (err) {
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function register(payload) {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Création du compte...'));

    try {
		const {
			  token, user
		} = await API.Auth.register(payload);

		await localStorage.setItem('ACCESS_TOKEN', token);
		dispatch({
          type: LOGIN,
          payload: {
            user
          }
        });

    } catch (err) {
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function signInUsingFacebook() {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Connexion a Facebook...'));

    try {
      const {
        type,
        token: accessToken
      } = await API.Auth.signInWithFacebook(payload);

      if (type === 'success') {
        const { token, user } = await API.Auth.signInWithFacebook({ accessToken });
        await localStorage.setItem('ACCESS_TOKEN', token);
        await dispatch(fetch());
        await dispatch({ type: LOGIN });
      } else {
        return;
      }
    } catch (err) {
      console.warn('Connexion error',err);
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function signInUsingGoogle() {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Connexion a Google...'));

    try {
      const {
        type,
        token: accessToken
      } = await API.Auth.signInWithGoogle(payload);

      if (type === 'success') {
        const { token, user } = await API.Auth.signInWithFacebook({ accessToken });
        await localStorage.setItem('ACCESS_TOKEN', token);
        await dispatch(fetch());
        await dispatch({ type: LOGIN });
      } else {
        return;
      }
    } catch (err) {
      console.warn('Connexion error',err);
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}
export function logout(id) {
  return async (dispatch, getState) => {
    await localStorage.removeItem('ACCESS_TOKEN');
    await dispatch({ type: LOGOUT });
  };
}

export function updateUserInfo(payload) {
   return async (dispatch, getState) => {
    const { loggedUser } = getState().loggedUser;

    try {
      const user = await API.User.updateProfil(loggedUser.id, payload);
      console.log(user);
      dispatch(update(user));
    } catch (err) {
      console.warn(err);
      throw err;
    }
  };
}

export function update(user) {
  return {
    type: UPDATE,
    payload: {
      user
    }
  };
}
