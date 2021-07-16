const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  BASE_IMAGE_URL_SMALL: 'https://restaurant-api.dicoding.dev/images/small/',
  BASE_IMAGE_URL_MEDIUM: 'https://restaurant-api.dicoding.dev/images/medium/',
  BASE_IMAGE_URL_LARGE: 'https://restaurant-api.dicoding.dev/images/large/',
  DATABASE_NAME: 'restaurante-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
  CACHE_NAME: new Date().toISOString(),

  /* Ketika memasuki production Ubah nama cache menjadi fixed string  */
  // CACHE_NAME: 'restaurante-v3',
};

export default CONFIG;
