import RestaurantSource from '../../data/restaurant-source';
import AlertInitiator from '../../utils/alert-initiator';

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

      <restaurant-list>
        <h2 tabindex="0">Explore Restaurants</h2>
        <loading-spinner></loading-spinner>
      </restaurant-list>
    `;
  },

  async afterRender() {
    const loadingContainer = document.querySelector('loading-spinner');
    const restaurantsContainer = document.querySelector('restaurant-list');

    try {
      const restaurants = await RestaurantSource.listRestaurants();
      restaurantsContainer.restaurants = restaurants;
      loadingContainer.remove();
    } catch (error) {
      AlertInitiator.showAlert({
        title: 'Oops...',
        message: 'Failed to load data',
        icon: 'error',
      });
      console.log(error);
    }
  },
};

export default Home;
