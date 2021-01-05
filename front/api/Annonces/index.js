import client from '../client';
import {authHeader, jsonHeader, jsonHeaderPhoto} from "../authRequest";

export function create(payload) {
  return client
      .post('/api/v1/cars', payload)
    .then(({ data }) => data);
}

export function get(id) {
  return client
      .get(`/api/v1/cars/${id}`)
      .then(({ data }) => data);
}

export function search(perPage, page, owner) {
  return client
      .get(`/api/v1/cars/search?perPage=${perPage}&page=${page}&owner=${owner ? owner : ''}`)
      .then(({ data }) => data);
}

export async function addPhoto(carId, payload) {
  payload.id = carId;
  return client
      .post(`/api/v1/cars/${carId}/uploads`, payload)
      .then(({ data }) => data);
}

export function removePhoto(carId, payload) {
  payload.car_id = carId;
  return client
      .delete(`/api/v1/cars/${carId}/uploads/${payload.id}`, payload)
      .then(({data}) => data);
}

export function updateCar(carId, payload) {
  payload.id = carId;
  return client
      .put(`/api/v1/cars/${carId}`, payload)
      .then(({ data }) => data);
}

export function deleteCar(carId, payload) {
  payload.id = carId;
  return client
      .delete(`/api/v1/cars/${carId}`, payload)
      .then(({ data }) => data);
}
