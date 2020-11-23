import * as LOGGED_USER_ACTIONS from '../actions/loggedUser';

const initialState = {
  isAuthentificated: false,
  loggedUser: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGGED_USER_ACTIONS.LOGIN:
      return { ...state, isAuthentificated: true, loggedUser: { ...action.payload.user } };
    case LOGGED_USER_ACTIONS.LOGOUT:
      return { ...state, isAuthentificated: false, loggedUser: null };
    case LOGGED_USER_ACTIONS.UPDATE:
      return { ...state, loggedUser: { ...action.payload.user } };
    default:
      return state;
  }
}