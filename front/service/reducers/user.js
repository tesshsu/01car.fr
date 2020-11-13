import * as USERS_ACTIONS from '../actions/users';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case USERS_ACTIONS.FETCH_USER:
      return { ...action.payload.users };
    case USERS_ACTIONS.SET_USERS:
      return { ...action.payload.users };
    case USERS_ACTIONS.UPDATE_USER:
      return { ...state, [action.payload.user.id]: action.payload.user };
    default:
      return state;
  }
}
