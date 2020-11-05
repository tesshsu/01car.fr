import client from '../client';

export function login(payload) {
  return client.post('auth/login', payload)
    .then(({ data }) => data);
}

export function register({ email, password }) {
  return client.post('auth/register', { email, password })
    .then(({ data }) => data);
}

export function forget_password({ email }) {
  return client.post('auth/forget_password', { email })
    .then(({ data }) => data);
}

export function signInWithFacebook(payload) {
  return client.post('auth/signInWithFacebook', payload)
    .then(({ data }) => data);
}
