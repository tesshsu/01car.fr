import axios from 'axios';
import * as API from '../../api';
import * as LOADING_OVERLAY_ACTIONS from './loadingOverlay';
import ENV from '../../environment';

export const LOGIN = 'logguedUser/LOGIN';
export const LOGOUT = 'logguedUser/LOGOUT';
export const UPDATE = 'logguedUser/UPDATE';
export const FETCH = 'logguedUser/FETCH';

export function login({ email, password }) {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Connexion...'));

    try {
      const { token, user: { id: userId } } = await API.Auth.login({ email, password });
      await localStorage.setItem('ACCESS_TOKEN', token);
      await dispatch(fetch());
      await dispatch({ type: LOGIN });
    } catch (err) {
      await dispatch({ type: LOGIN });
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
      const { token, user: { id: userId } } = await API.Auth.forget_password({ email });
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
      const { user, token } = await API.Auth.register(payload);
      await localStorage.setItem('ACCESS_TOKEN', token);
      await dispatch(update(user));
      dispatch({ type: LOGIN });
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
        const { token, user: { id: userId } } = await API.Auth.signInWithFacebook({ accessToken });
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

export function logout() {
  return async (dispatch, getState) => {
    const { user: { id: userId } } = getState().logguedUser;
    await localStorage.removeItem('ACCESS_TOKEN');
    await dispatch({ type: LOGOUT });
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
