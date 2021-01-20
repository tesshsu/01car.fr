import client from '../client';

export function login({ email, password }) {
  return client.post('/api/auth/login', { email, password })
    .then(({ data }) => data);
}

export function register(payload) {
  return client.post('/api/auth/register', payload)
    .then(({ data }) => data);
}

export function forget_password({ email }) {
  return client.post('/api/password/email', { email })
    .then(({ data }) => data);
}

export function modify_password({ password }) {
  return client.post('/api/password/reset', { password })
    .then(({ data }) => data);
}

export function signInWithFacebook(payload) {
  return client.get('/api/auth/redirect/facebook', payload)
    .then(({ data }) => data);
}

export function signInWithGoogle(payload) {
  return client.get('/api/auth/redirect/google', payload)
    .then(({ data }) => data);
}
