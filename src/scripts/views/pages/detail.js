import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parse';
import AlertInitiator from '../../utils/alert-initiator';
import '../../components/restaurant-detail';
// import FormReviewInitiator from '../../utils/form-review-initiator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
// import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <restaurant-detail class="restaurant">
        <loading-spinner></loading-spinner>
      </restaurant-detail>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const loadingContainer = document.querySelector('loading-spinner');
    const restaurantContainer = document.querySelector('restaurant-detail');
    const url = UrlParser.parseAciveUrlWithoutCombiner();

    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      restaurantContainer.restaurant = restaurant;

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

      loadingContainer.style.display = 'none';
    } catch (error) {
      AlertInitiator.showAlert(`Oopss...`, `Failed to display data!`, 'error');
      console.log(error);
    }
  },

};

export default Detail;
