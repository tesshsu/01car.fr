import client from '../client';
import {authHeader, jsonHeader} from "../authRequest";

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

export function search(perPage, page) {
  return client
      .get(`/api/v1/cars/search?perPage=${perPage}&page=${page}`)
      .then(({ data }) => data);
}

export async function addPhoto(id) {
  return client
      .post(`/api/v1/cars/${id}/uploads`)
      .then(({ data }) => data);
}

export function updateCar(carId, payload) {
  payload.id = carId;
  return client
      .put(`/api/v1/cars/${carId}`)
      .then(({ data }) => data);
}
