import FavoriteRestaurantIdb from '../../data/favorite-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section id="favorite-section">
        <h2 tabindex="0">Favorite Restaurant</h2>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.getElementById('favorite-section');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.insertAdjacentHTML('beforeend', createRestaurantItemTemplate(restaurant));
    });
  },
};

export default Favorite;
