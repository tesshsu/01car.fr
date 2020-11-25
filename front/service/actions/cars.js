// Create Redux action types
import * as API from "../../api";

export const GET_CARS = 'GET_CARS'
export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS'
export const GET_CARS_FAILURE = 'GET_CARS_FAILURE'


// Create Redux action creators that return an action
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

// Combine them all in an asynchronous thunk
export function fetchCars(page=1, perPage=18) {
  return async (dispatch) => {
    dispatch(getCars())

    try {
      const response = await API.Annonces.search(perPage, page);
      dispatch(getCarsSuccess(response))
    } catch (error) {
      dispatch(getCarsFailure())
    }
  }
}
