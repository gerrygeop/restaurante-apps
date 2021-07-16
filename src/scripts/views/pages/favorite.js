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
      if (!restaurants.length) {
        restaurantsContainer.insertAdjacentHTML('beforeend', createBlankFavoriteTemplate());
      }
      restaurantsContainer.restaurants = restaurants;
      loadingContainer.remove();
    } catch (error) {
      AlertInitiator.showAlert({
        title: 'Oops...',
        message: 'Failed to load data',
        icon: 'error',
      });
    }
  },
};

export default Favorite;
