import { combineReducers } from 'redux';
import * as actions from '../actions/cars';

export const initialState = {
  current_page: 0,
  from: 0,
  to: 0,
  per_page: 0,
  last_page: 0,
  total: 0,
  cars: [],
  selectedCar: undefined,
  loading: false,
  hasErrors: false,
}

export default function carsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_CAR:
      return {...state, loading: true}
    case actions.CREATE_CAR_SUCCESS:
      return {selectedCar: action.payload, loading: false, hasErrors: false}
    case actions.CREATE_CAR_FAILURE:
      return {...state, loading: false, hasErrors: true}
    case actions.GET_CARS:
      return {...state, loading: true}
    case actions.GET_CARS_SUCCESS:
      return {
        current_page: action.payload.current_page,
        from: action.payload.from,
        to: action.payload.to,
        per_page: action.payload.per_page,
        last_page: action.payload.last_page,
        total: action.payload.total,
        cars: action.payload.data,
        loading: false,
        hasErrors: false}
    case actions.GET_CAR_FAILURE:
      return {...state, loading: false, hasErrors: true}
    case actions.GET_CAR:
      return {...state, loading: true}
    case actions.GET_CAR_SUCCESS:
      return {
        selectedCar: action.payload,
        loading: false,
        hasErrors: false}
    case actions.GET_CARS_FAILURE:
      return {...state, loading: false, hasErrors: true}
    case actions.GET_CAR_SUCCESS:
      return {
        selectedCar: action.payload,
        loading: false,
        hasErrors: false};
    case actions.UPDATE_CAR:
      return {...state, loading: true}
    case actions.UPDATE_CAR_SUCCESS:
      return {selectedCar: action.payload, loading: false, hasErrors: false};
    case actions.UPDATE_CAR_FAILURE:
      return {...state, loading: false, hasErrors: true};
    case actions.DELETE_CAR:
      return {...state, loading: true}
    case actions.DELETE_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: false,
        cars: state.cars.filter(item => item.id !== action.payload.carId),
      };
    case actions.DELETE_CAR_FAILURE:
      return {...state, loading: false, hasErrors: true};
    default:
      return state
  }
}

