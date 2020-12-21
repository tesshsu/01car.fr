import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as ANNONCES_ACTIONS from '../actions/cars';

export default function useAnnonces() {


  const dispatch = useDispatch();

  const fetchAnnonces = useCallback(() => dispatch(ANNONCES_ACTIONS.fetchCars(page=1, perPage=18)), [dispatch]);

  const createAnnonce = useCallback(
    payload => dispatch(ANNONCES_ACTIONS.create(payload)),
    [dispatch]
  );

  return {
	createAnnonce,
    fetchAnnonces
  };
}
