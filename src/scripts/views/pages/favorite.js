import FavoriteRestaurantIdb from '../../data/favorite-idb';
import AlertInitiator from '../../utils/alert-initiator';
import { createBlankFavoriteTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <restaurant-list>
        <h2 tabindex="0">Favorite Restaurants</h2>
        <loading-spinner></loading-spinner>
      </restaurant-list>
    `;
  },

  async afterRender() {
    const loadingContainer = document.querySelector('loading-spinner');
    const restaurantsContainer = document.querySelector('restaurant-list');

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
      if (restaurants.length === 0) {
        restaurantsContainer.insertAdjacentHTML('beforeend', createBlankFavoriteTemplate());
      }
      restaurantsContainer.restaurants = restaurants;
      loadingContainer.style.display = 'none';
    } catch (error) {
      AlertInitiator.showAlert('Oops...', 'Failed to load data', 'error');
    }
  },
};

export default Favorite;
