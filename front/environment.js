const ENVS = {
  BASE: {
    APP_NAME: '1car',
    GOOGLE_API_KEY: 'AIzaSyAOeGj8aXNwCY52E8ItcNtch8WYTXRk2GE',
    FACEBOOK_APP_ID: '862552420923956',
    FACEBOOK_APP_NAME: '1car'
  },
  DEV: {
    ENV: 'DEV',
	API_URL: 'https://api.1car.fr'
  },
  PROD: {
    ENV: 'PROD',
	API_URL: 'https://api.1car.fr'
  },
};

export default {
  ...ENVS
};
