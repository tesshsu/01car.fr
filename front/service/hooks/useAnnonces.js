import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as ANNONCES_ACTIONS from '../actions/cars';

export default function useAnnonces() {
  const dispatch = useDispatch();
  const car = useSelector(state => state.selectedCar);
  
  const fetchAnnonces = useCallback(() => dispatch(ANNONCES_ACTIONS.fetchCars(page=1, perPage=18)), [dispatch]);
  
  const filterAnnonces = useCallback(() => dispatch(ANNONCES_ACTIONS.filterCars(page=1, perPage=18)), [dispatch]);

  const create = useCallback(async (payload) => {
    try {
      await dispatch(ANNONCES_ACTIONS.create(payload));
    } catch (err) {
      console.log("create_car_error", err);
    }
  }, [dispatch]);

  const deleteCar = useCallback(async (carId, payload) => {
    try {
      await dispatch(ANNONCES_ACTIONS.deleteCar(carId, payload));
    } catch (err) {
      console.log("delete_car_error", err);
    }
  }, [dispatch]);

  const editCar = useCallback(async (carId) => {
    try {
      await dispatch(ANNONCES_ACTIONS.editCar(carId));
    } catch (err) {
      console.log("update_car_error", err);
    }
  }, [dispatch]);

  const modifyCar = useCallback(async (carId, payload) => {
    try {
      await dispatch(ANNONCES_ACTIONS.modifyCar(carId, payload));
    } catch (err) {
      console.log("update_car_error", err);
    }
  }, [dispatch]);

  const addPhoto = useCallback(async (carId, payload) => {
    try {
      return await dispatch(ANNONCES_ACTIONS.addPhoto(carId, payload));
    } catch (err) {
      console.log("add_car_photo_error", err);
    }
  }, [dispatch]);

  const removePhoto = useCallback(async (carId, payload) => {
    try {
      return await dispatch(ANNONCES_ACTIONS.removePhoto(carId, payload));
    } catch (err) {
      console.log("add_car_photo_error", err);
    }
  }, [dispatch]);

  return {
    car: car,
    create,
    addPhoto,
    removePhoto,
    editCar,
    modifyCar,
    deleteCar,
    fetchAnnonces,
	filterAnnonces
  };
}
