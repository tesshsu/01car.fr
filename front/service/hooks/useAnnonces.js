import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as ANNONCES_ACTIONS from '../actions/cars';

export default function useAnnonces() {
  const dispatch = useDispatch();

  const fetchAnnonces = useCallback(() => dispatch(ANNONCES_ACTIONS.fetchCars(page=1, perPage=18)), [dispatch]);

  const create = useCallback(async (target) => {
    try {
      await dispatch(ANNONCES_ACTIONS.create(target));
    } catch (err) {
      alert('car create', err.message);
    }
  }, [dispatch]);

  return {
    create,
    fetchAnnonces
  };
}
