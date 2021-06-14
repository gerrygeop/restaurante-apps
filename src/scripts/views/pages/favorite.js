import FavoriteRestaurantIdb from '../../data/favorite-idb';
import AlertInitiator from '../../utils/alert-initiator';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section id="favorite-section">
        <h2 tabindex="0">Favorite Restaurant</h2>
        <loading-spinner class="loading"></loading-spinner>
      </section>
    `;
  },

  async afterRender() {
    const loadingContainer = document.querySelector('loading-spinner');
    const restaurantsContainer = document.getElementById('favorite-section');

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
      restaurants.forEach((restaurant) => {
        restaurantsContainer.insertAdjacentHTML('beforeend', createRestaurantItemTemplate(restaurant));
      });

      loadingContainer.style.display = 'none';
    } catch (error) {
      AlertInitiator.showAlert('Oops...', 'Failed to load data', 'error');
    }
  },
};

export default Favorite;
