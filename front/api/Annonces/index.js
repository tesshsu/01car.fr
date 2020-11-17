import client from '../client';

export function create(payload) {
  return client
    .post('/annonce', payload)
    .then(({ data }) => data);
}

export function get() {
  return client
    .get('/annonce')
    .then(({ data }) => data);
}