import FavoriteRestaurantIdb from '../../data/favorite-idb';
import AlertInitiator from '../../utils/alert-initiator';
import { createSpinnerTemplate, createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section id="favorite-section">
        <h2 tabindex="0">Favorite Restaurant</h2>
        <div class="loading" id="loading"></div>
      </section>
    `;
  },

  async afterRender() {
    const loading = document.getElementById('loading');
    loading.innerHTML = createSpinnerTemplate();

    const restaurantsContainer = document.getElementById('favorite-section');

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
      restaurants.forEach((restaurant) => {
        restaurantsContainer.insertAdjacentHTML('beforeend', createRestaurantItemTemplate(restaurant));
      });

      loading.style.display = 'none';
    } catch (error) {
      AlertInitiator.showAlert('Oops...', 'Failed to load data', 'error');
    }
  },
};

export default Favorite;
