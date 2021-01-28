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

export function filter(perPage, page, postal_code, price_min, price_max, km_min, km_max, brand, model, owner_type, fuel, transmission, year_min, year_max) {
	let url = `/api/v1/cars/search?`;
	url += perPage ? 'perPage=' + perPage  : '',
	url += page ? '&page=' + page  : '',
	url += postal_code ? '&postal_code=' + postal_code  : '',
	url += price_min ? '&price_min=' + price_min  : '',
	url += price_max ? '&price_max=' + price_max  : '',
	url += km_min ? '&km_min=' + km_min  : '',
	url += km_max ? '&km_max=' + km_max  : '',
	url += brand ? '&brand=' + brand  : '',
	url += model ? '&model=' + model  : '',
	url += owner_type ? '&owner_type=' + owner_type  : '',
	url += fuel ? '&fuel=' + fuel  : '',
	url += transmission ? '&transmission=' + transmission  : '',
	url += year_min ? '&year_min=' + year_min  : '',
	url += year_max ? '&year_max=' + year_max  : '';
	
	
  return client
      .get(url)
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
