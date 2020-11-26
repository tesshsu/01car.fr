import client from '../client';

export function getUser(id) {
  return client
    .get(`/api/v1/profil/${id}`)
    .then(({ data }) => data);
}

export async function updateProfil(userId, userInfo) {
  userInfo.id = userId;
  return client
    .patch(`/api/v1/profil`,  userInfo );
}
