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


export const CREATE_CAR = 'CREATE_CAR';
export const CREATE_CAR_SUCCESS = 'CREATE_CAR_SUCCESS';
export const CREATE_CAR_FAILURE = 'CREATE_CAR_FAILURE';


export const ADD_CAR_PHOTO = 'ADD_CAR_PHOTO';
export const ADD_CAR_PHOTO_SUCCESS = 'ADD_CAR_PHOTO_SUCCESS';
export const ADD_CAR_PHOTO_FAILURE = 'ADD_CAR_PHOTO_SUCCESS';

export const UPDATE_CAR = 'UPDATE_CAR'
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

export const createCarSuccess = (response) => ({
  type: CREATE_CAR_SUCCESS,
  payload: response,
})

export const createCarFailure = () => ({
  type: CREATE_CAR_FAILURE,
})

export const addCarPhotoFailure = () => ({
  type: ADD_CAR_PHOTO_FAILURE,
})

export const addCarPhotoSuccess = (response) => ({
  type: ADD_CAR_PHOTO_SUCCESS,
  payload: response,
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
export function fetchCars(page=1, perPage=18, owner=undefined) {
  return async (dispatch) => {
    dispatch(getCars())

    try {
      const response = await API.Annonces.search(perPage, page, owner);
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
      dispatch(createCarSuccess(response));
    } catch (err) {
      await dispatch(createCarFailure());
	  throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function addPhoto(carId, payload) {
  return async (dispatch, getState) => {
    dispatch(updateCar())
    try {
      const response = await API.Annonces.addPhoto(carId, payload);
      dispatch(addCarPhotoSuccess(response));
    } catch (err) {
      await dispatch(addCarPhotoFailure());
      throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}

export function modifyCar(id, response) {
  return async (dispatch, getState) => {
    const { car } = getState().car;
    dispatch(updateCar())

    try {
      const car = await API.Annonces.updateCar(car.id, response);
      dispatch(updateCarSuccess(response));

    } catch (error) {
      dispatch(updateCarFailure())
    }
  }
}
