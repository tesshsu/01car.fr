import { combineReducers } from 'redux';
import * as ANNONCE_ACTIONS from '../actions/annonces';

function isFetchingReducer(state = false, action) {
  switch (action.type) {
    case ANNONCE_ACTIONS.SET_FETCHING:
      return action.payload.isFetching;
    default:
      return state;
  }
}

const annoncesReducer = createAnnonceReducer((state, action) => {
  switch (action.type) {
    case ANNONCE_ACTIONS.SET_ANNONCE:
      return [...action.payload.annonces];
    case ANNONCE_ACTIONS.ADD_ANNONCE:
      return [...state, action.payload.annonces];
    default:
      return state;
  }
}, []);

export default combineReducers({
  isFetching: isFetchingReducer,
  ...annoncesReducer
});
