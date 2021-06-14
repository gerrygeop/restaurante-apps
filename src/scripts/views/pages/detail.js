import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parse';
import AlertInitiator from '../../utils/alert-initiator';
import FormReviewInitiator from '../../utils/form-review-initiator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant">
        <loading-spinner class="loading"></loading-spinner>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const loadingContainer = document.querySelector('loading-spinner');
    const restaurantContainer = document.getElementById('restaurant');
    const url = UrlParser.parseAciveUrlWithoutCombiner();

    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

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

      const formReview = restaurantContainer.querySelector('form');
      formReview.addEventListener('submit', () => {
        FormReviewInitiator.init({
          data: {
            id: url.id,
            name: formReview.querySelector('#customerName').value,
            review: formReview.querySelector('#customerReview').value,
          },
        });
      });
    } catch (error) {
      AlertInitiator.showAlert(`Oopss...`, `Failed to display data!`, 'error');
      console.log(error);
    }
  },

};

export default Detail;
