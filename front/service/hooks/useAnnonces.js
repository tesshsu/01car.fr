import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as ANNONCES_ACTIONS from '../actions/annonces';

export default function useAnnonces() {
  const { annonces } = useSelector(state => state.annonces);
  const dispatch = useDispatch();
  const fetchAnnonces = useCallback(() => dispatch(ANNONCES_ACTIONS.fetchAll()), [dispatch]);

  return {
    annonces,
    fetchAnnonces
  };
}
