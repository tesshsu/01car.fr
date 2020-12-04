import client from '../client';

export function submitReponses(payload) {
  return client.post('/api/auth/question', payload)
    .then(({ data }) => data);
}
