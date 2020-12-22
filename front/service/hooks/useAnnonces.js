import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as ANNONCES_ACTIONS from '../actions/cars';

export default function useAnnonces() {
  const dispatch = useDispatch();

  const fetchAnnonces = useCallback(() => dispatch(ANNONCES_ACTIONS.fetchCars(page=1, perPage=18)), [dispatch]);

  const create = useCallback(async (payload) => {
    try {
      await dispatch(ANNONCES_ACTIONS.create(payload));
    } catch (err) {
      console.log("create_car_error", err);
    }
  }, [dispatch]);

  return {
    create,
    fetchAnnonces
  };
}
