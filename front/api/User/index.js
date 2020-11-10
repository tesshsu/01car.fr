import client from '../client';

export function me() {
  return client
    .get('users/me')
    .then(({ data }) => data);
}

export function getUser(id) {
  return client
    .get(`users/${id}`)
    .then(({ data }) => data);
}
