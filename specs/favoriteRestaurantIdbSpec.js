import FavoriteRestaurantIdb from '../src/scripts/data/favorite-idb';
import { itActAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

describe('Favorite Restaurant IDB Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
