import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as ANNONCES_ACTIONS from '../actions/cars';

export default function useAnnonces() {
  
  
  const dispatch = useDispatch();
  
  const fetchAnnonces = useCallback(() => dispatch(ANNONCES_ACTIONS.fetchCars(page=1, perPage=18)), [dispatch]);
  
  const postCar = useCallback(
    payload => dispatch(ANNONCES_ACTIONS.postCar(payload)),
    [dispatch]
  ); 
  
  return {
	postCar,
    fetchAnnonces
  };
}
