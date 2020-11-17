import * as API from '../../Api';

export const SET_FETCHING = 'annonces/SET_FETCHING';
export const SET_ANNONCE = 'annonces/SET_ANNONCES';
export const ADD_ANNONCE = 'annonces/ADD_ANNONCE';

export function fetchAll() {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_FETCHING,
        payload: {
          isFetching: true
        }
      });
      const annonces = await API.annonces.get();
    } catch (err) {
      console.warn(err);
      throw err;
    } finally {
      dispatch({
        type: SET_FETCHING,
        payload: {
          isFetching: false
        }
      });
    }
  };
}

export function createAnnonce(id) {
  return async (dispatch) => {
    try {
      const Annonce = await API.Annonces.create({
        id
      });

      if (Annonce !== '') {
        dispatch({
          type: ADD_ANNONCE,
          payload: {
            annonce
          }
        });
      }
    } catch (err) {
      console.warn(err);
      throw err;
    }
  };
}

export function setAnnonces(annonces) {
  return {
    type: SET_ANNONCE,
    payload: {
      annonces,
    }
  };
}
