import { combineReducers } from 'redux';
import * as actions from '../actions/cars';

export const initialState = {
  car: {},
  loading: false,
  hasErrors: false,
}

export default function carReducer(state = initialState, action) {
 switch (action.type) {
    case actions.CREATE_CAR:
      return {...state, loading: true}
    case actions.CREATE_CAR_SUCCESS:
      return {car: action.payload, loading: false, hasErrors: false}
    case actions.CREATE_CAR_FAILURE:
      return {...state, loading: false, hasErrors: true}
     case actions.UPDATE_CAR:
         return {...state, loading: true}
     case actions.UPDATE_CAR_SUCCESS:
         return {car: action.payload, loading: false, hasErrors: false}
     case actions.UPDATE_CAR_FAILURE:
         return {...state, loading: false, hasErrors: true}
         default:
      return state
  }
}
