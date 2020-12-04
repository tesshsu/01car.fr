import * as VENDRE_ACTIONS from '../actions/vendre';

const initialState = {
  responses: [],
  loading: false,
  hasErrors: false,
};

export default function vendreReducer(state = initialState, action) {
  switch (action.type) {
    case VENDRE_ACTIONS.SEND_RESPONSES:
      return { ...state, loading: true, responses: { ...action.payload.data } };
    case VENDRE_ACTIONS.SEND_RESPONSES_SUCCESS:
      return { ...state, loading: false };
    case VENDRE_ACTIONS.SEND_RESPONSES_FAILURE:
      return { ...state, hasErrors: false };
    default:
      return state;
  }
}
