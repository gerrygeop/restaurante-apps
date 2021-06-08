import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parse';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createCustomerReviews, createCategoriesItem, createMenuItem, createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseAciveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);

    const restaurantContainer = document.getElementById('restaurant');
    restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant);
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

    if (!!restaurantContainer) {
      console.log('DOM is ready.'); // JANGAN LUPA DIHAPUS
      this._renderDetailItem(restaurant);
    }
  },

  _renderDetailItem(restaurant) {
    const categoriesContainer = document.getElementById('categories');
    const foodList = document.getElementById('foods-list');
    const drinkList = document.getElementById('drinks-list');
    const reviews = document.getElementById('customerReviews');

    restaurant.categories.forEach((category) => {
      categoriesContainer.insertAdjacentHTML('beforeend', createCategoriesItem(category));
    });

    restaurant.menus.foods.forEach((food) => {
      foodList.innerHTML += createMenuItem(food);
    });

    restaurant.menus.drinks.forEach((drink) => {
      drinkList.innerHTML += createMenuItem(drink);
    });

    restaurant.customerReviews.forEach((customer) => {
      reviews.insertAdjacentHTML('beforeend', createCustomerReviews(customer));
    });
  },
};

export default Detail;
