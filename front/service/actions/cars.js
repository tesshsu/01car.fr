// Create Redux action types
import {authHeader, jsonHeader, jsonHeaderPhoto} from '../../api/authRequest';
import * as API from "../../api";
import * as LOADING_OVERLAY_ACTIONS from './loadingOverlay';
export const GET_CAR = 'GET_CAR'
export const GET_CAR_SUCCESS = 'GET_CAR_SUCCESS'
export const GET_CAR_FAILURE = 'GET_CAR_FAILURE'

export const GET_CARS = 'GET_CARS'
export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS'
export const GET_CARS_FAILURE = 'GET_CARS_FAILURE'


export const CREATE_CAR = 'car/CREATE_CAR';
export const CREATE_CAR_SUCCESS = 'car/CREATE_CAR_SUCCESS';
export const CREATE_CAR_FAILURE = 'car/CREATE_CAR_FAILURE';


export const ADD_CAR_PHOTO = 'ADD_CAR_PHOTO';
export const ADD_CAR_PHOTO_SUCCESS = 'ADD_CAR_PHOTO_SUCCESS';
export const ADD_CAR_PHOTO_FAILURE = 'ADD_CAR_PHOTO_SUCCESS';

export const UPDATE_CAR = 'car/UPDATE_CAR'
export const UPDATE_CAR_SUCCESS = 'car/UPDATE_CAR_SUCCESS'
export const UPDATE_CAR_FAILURE = 'car/UPDATE_CAR_FAILURE'

// Create Redux action creators that return an action
export const getCar = () => ({
  type: GET_CAR,
});

export const getCarSuccess = (response) => ({
  type: GET_CAR_SUCCESS,
  payload: response,
});

export const getCarFailure = () => ({
  type: GET_CAR_FAILURE,
});


export const getCars = () => ({
  type: GET_CARS,
})

export const getCarsSuccess = (response) => ({
  type: GET_CARS_SUCCESS,
  payload: response,
})

export const getCarsFailure = () => ({
  type: GET_CARS_FAILURE,
})

export const createCar = () => ({
  type: CREATE_CAR,
})

export const createCarsSuccess = (response) => ({
  type: CREATE_CAR_SUCCESS,
  payload: response,
})

export const createCarFailure = () => ({
  type: CREATE_CAR_FAILURE,
})

export const addCarPhotoFailure = () => ({
  type: ADD_CAR_PHOTO_FAILURE,
})

export const updateCar = () => ({
  type: UPDATE_CAR,
});

export const updateCarSuccess = (response) => ({
  type: UPDATE_CAR_SUCCESS,
  payload: response,
})

export const updateCarFailure = () => ({
  type: UPDATE_CAR_FAILURE,
})
// Combine them all in an asynchronous thunk
export function fetchCars(page=1, perPage=18) {
  return async (dispatch) => {
    dispatch(getCars())

    try {
      const response = await API.Annonces.search(perPage, page);
      dispatch(getCarsSuccess(response));

    } catch (error) {
      dispatch(getCarsFailure())
    }
  }
}

export function fetchCar(id) {
  return async (dispatch) => {
    dispatch(getCar())

    try {
      const response = await API.Annonces.get(id);
      dispatch(getCarSuccess(response));

    } catch (error) {
      dispatch(getCarFailure())
    }
  }
}

export function create(payload) {
  return async (dispatch) => {
    try {
      const response = await API.Annonces.create(
        payload
      );
      console.log("data_dispatch ", response);
      dispatch({
        type: CREATE_CAR_SUCCESS,
        payload: {
          response
        }
      });
    } catch (err) {
      await dispatch(createCarFailure());
	  throw err;
      console.log(err);
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function addPhoto(payload) {
  return async (dispatch, getState) => {
	//const { car } = getState().car;
    try {
      const response = await API.Annonces.addPhoto(
          payload
      );
      console.log("data_dispatch ", response);
      dispatch({
        type: ADD_CAR_PHOTO_SUCCESS,
        payload: {
          response
        }
      });
    } catch (err) {
      await dispatch(addCarPhotoFailure());
      throw err;
      console.log(err);
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function modifyCar(id) {
  return async (dispatch) => {
    dispatch(updateCar())

    try {
      const response = await API.Annonces.updateCar(id);
      dispatch(updateCarSuccess(response));

    } catch (error) {
      dispatch(updateCarFailure())
    }
  }
}
