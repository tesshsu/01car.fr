import client from '../client';

export function me() {
  return client
    .get('users/me')
    .then(({ data }) => data);
}

export function getUser(id) {
  return client
    .get(`profil/${id}`)
    .then(({ data }) => data);
}

export async function updateprofil(id, payload) {
  return client
    .put(`profil/${id}`, payload);
}