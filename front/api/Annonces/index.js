import client from '../client';

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

