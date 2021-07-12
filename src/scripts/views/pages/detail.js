import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parse';
import AlertInitiator from '../../utils/alert-initiator';
import '../../components/restaurant-detail';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-idb';

const Detail = {
  async render() {
    return `
      <div id="likeButtonContainer"></div>
      <restaurant-detail class="restaurant">
        <loading-spinner></loading-spinner>
      </restaurant-detail>
    `;
  },

  async afterRender() {
    const loadingContainer = document.querySelector('loading-spinner');
    const restaurantContainer = document.querySelector('restaurant-detail');
    const url = UrlParser.parseAciveUrlWithoutCombiner();

    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      restaurantContainer.restaurant = restaurant;

      LikeButtonPresenter.init({
        likeButtonContainer: document.getElementById('likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          rating: restaurant.rating,
          city: restaurant.city,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
        },
      });

      loadingContainer.remove();
    } catch (error) {
      AlertInitiator.showAlert({
        title: `Oopss...`,
        message: `Failed to display data!`,
        icon: 'error',
      });
      console.log(error);
    }
  },

};

export default Detail;
