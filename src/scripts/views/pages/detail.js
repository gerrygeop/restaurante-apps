import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parse';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createSpinnerTemplate, createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant">
        <div class="loading" id="loading"></div>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const loading = document.getElementById('loading');
    loading.innerHTML = createSpinnerTemplate();

    const url = UrlParser.parseAciveUrlWithoutCombiner();
    const restaurantContainer = document.getElementById('restaurant');
    const restaurant = await RestaurantSource.detailRestaurant(url.id);

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    loading.style.display = 'none';

    console.log(restaurant.id); // JANGAN LUPA DIHAPUS

    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
