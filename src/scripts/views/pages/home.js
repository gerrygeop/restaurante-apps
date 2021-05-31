import RestaurantSource from '../../data/restaurant-source';

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

      <article class="explore" id="explore-section">
        <h2 tabindex="0">Explore Restaurant</h2>
      </article>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    console.log(restaurants);
  },
};

export default Home;
