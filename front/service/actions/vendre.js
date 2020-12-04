import * as API from '../../api';
import * as LOADING_OVERLAY_ACTIONS from './loadingOverlay';
import { useCallback } from 'react';

export const SEND_RESPONSES = 'SEND_RESPONSES'
export const SEND_RESPONSES_SUCCESS = 'SEND_RESPONSES_SUCCESS'
export const SEND_RESPONSES_FAILURE = 'SEND_RESPONSES_FAILURE'

export function submitReponses(payload) {
  return async (dispatch) => {
    dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(true, 'Création annonce...'));

    try {
		const {
			  token, response
		} = await API.Auth.submitReponses(payload);

		await localStorage.setItem('ACCESS_TOKEN', token);
		dispatch({
          type: SEND_RESPONSES,
          payload: {
            response
          }
        });

    } catch (err) {
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

