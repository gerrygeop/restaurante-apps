import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createSpinnerTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="hero">
        <div class="hero-image"></div>
        <div class="hero-text">
          <h1 tabindex="0">Explore Restaurant</h1>
          <p tabindex="0">Get a restaurant recommendation near your location</p>
        </div>
      </div>

      <section id="explore-section">
        <h2 tabindex="0">Explore Restaurant</h2>
        <div class="loading" id="loading"></div>
      </section>
    `;
  },

  async afterRender() {
    const loading = document.getElementById('loading');
    loading.innerHTML = createSpinnerTemplate();

    const restaurantsContainer = document.getElementById('explore-section');
    const restaurants = await RestaurantSource.listRestaurants();

    restaurants.forEach((restaurant) => {
      restaurantsContainer.insertAdjacentHTML('beforeend', createRestaurantItemTemplate(restaurant));
    });

    loading.style.display = 'none';
  },
};

export default Home;
