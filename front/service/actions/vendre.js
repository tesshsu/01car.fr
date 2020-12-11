import * as API from '../../api';
import * as LOADING_OVERLAY_ACTIONS from './loadingOverlay';
import { useCallback } from 'react';

export const SEND_RESPONSES = 'SEND_RESPONSES'
export const SEND_RESPONSES_SUCCESS = 'SEND_RESPONSES_SUCCESS'
export const SEND_RESPONSES_FAILURE = 'SEND_RESPONSES_FAILURE'

export const postResponse = () => ({
  type: SEND_RESPONSES,
})

export const postResponseSuccess = (data) => ({
  type: SEND_RESPONSES_SUCCESS,
  payload: data,
})

export const postResponseFailure = () => ({
  type: SEND_RESPONSES_FAILURE,
})


/*export function submitReponses(payload) {
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
}*/

export function submitReponses(payload) {
    
	const requestOptions = {
	  method: 'POST',
	  url: 'https://api.autovisual.com/v2/av',
	  headers: {'content-type': 'application/json'},
	  body: {key: 'Eub7Ck23wqWVD79E2zwzCdUoSWRSeJk3PPKNWRv38f5M', country_ref: 'FR'},
	  json: true
	};
	return async (dispatch) => {
		dispatch(postResponse())
		try {
		  const response = await fetch('https://api.autovisual.com/v2/av', requestOptions)
		  const data = await response.json()

		  dispatch(postResponseSuccess(data))
		} catch (error) {
		  dispatch(postResponseFailure())
		}
    }
}

