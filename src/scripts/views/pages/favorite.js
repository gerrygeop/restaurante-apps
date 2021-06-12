import FavoriteRestaurantIdb from '../../data/favorite-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

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
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();

    restaurants.forEach((restaurant) => {
      restaurantsContainer.insertAdjacentHTML('beforeend', createRestaurantItemTemplate(restaurant));
    });

    loading.style.display = 'none';
  },
};

export default Favorite;
