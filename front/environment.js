const ENVS = {
  BASE: {
    APP_NAME: '01car',
    GOOGLE_API_KEY: 'AIzaSyAOeGj8aXNwCY52E8ItcNtch8WYTXRk2GE',
    FACEBOOK_APP_ID: '862552420923956',
    FACEBOOK_APP_NAME: '01car'
  },
  DEV: {
    ENV: 'DEV',
	API_URL: 'https://api.01car.fr',
  },
  PRO: {
    ENV: 'PRO',
	API_URL: 'https://api.01car.fr'
  },
};

export default {
  ...ENVS
};
