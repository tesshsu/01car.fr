import { useSelector, useDispatch } from 'react-redux';

import { useCallback } from 'react';
import * as VENDRE_ACTIONS from '../actions/vendre';

export default function useVendre() {
  const { responses } = useSelector(state => state.responses);
  const dispatch = useDispatch();

  const submitReponses = useCallback(
    payload => dispatch(responses.submitReponses(payload)),
    [dispatch]
  );
 
  return {
    responses,
    submitReponses
  };
}
