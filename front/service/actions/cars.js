// Create Redux action types
import * as API from "../../api";

export const GET_CAR = 'GET_CAR'
export const GET_CAR_SUCCESS = 'GET_CAR_SUCCESS'
export const GET_CAR_FAILURE = 'GET_CAR_FAILURE'

export const GET_CARS = 'GET_CARS'
export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS'
export const GET_CARS_FAILURE = 'GET_CARS_FAILURE'


export const CREATE_CAR = 'CREATE_CAR';
export const CREATE_CAR_SUCCESS = 'CREATE_CAR_SUCCESS';
export const CREATE_CAR_FAILURE = 'CREATE_CAR_FAILURE';

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

/*export function create(payload) {
  console.log("postcar-create=", payload);
  return async (dispatch) => {
    console.log("postcar-create2=", payload);
	console.log("postcar=", payload);
    try {
      const response = await API.Annonces.create(payload);
      dispatch(createCarsSuccess(response));
    } catch (err) {
      await dispatch({ type: POST_CAR_FAILURE });
	  throw err;
    } finally {
      dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
    }
  };
}*/


export function create(payload) {
  return async (dispatch, getState) => {
    const { car } = getState().car;
    //dispatch(getUser())

    try {
      const car = await API.Annonces.create(car.id, payload);
      console.log("api_car", car);
      dispatch(createCarsSuccess(response));
    } catch (error) {
      await dispatch(createCarFailure());
      throw err;
    }
  }
}
