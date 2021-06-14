import RestaurantSource from '../../data/restaurant-source';
import AlertInitiator from '../../utils/alert-initiator';
import { createRestaurantItemTemplate } from '../templates/template-creator';

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
        <loading-spinner class="loading"></loading-spinner>
      </section>
    `;
  },

  async afterRender() {
    const loadingContainer = document.querySelector('loading-spinner');

    const restaurantsContainer = document.getElementById('explore-section');

    try {
      const restaurants = await RestaurantSource.listRestaurants();
      restaurants.forEach((restaurant) => {
        restaurantsContainer.insertAdjacentHTML('beforeend', createRestaurantItemTemplate(restaurant));
      });

      loadingContainer.style.display = 'none';
    } catch (error) {
      AlertInitiator.showAlert('Oops...', 'Failed to load data', 'error');
      console.log(error);
    }
  },
};

export default Home;
