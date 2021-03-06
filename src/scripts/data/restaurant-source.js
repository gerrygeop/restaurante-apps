import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

const RestaurantSource = {
  async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responJson = await response.json();
    return responJson.restaurants;
  },

  async detailRestaurant(id) {
    // eslint-disable-next-line new-cap
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responJson = await response.json();
    return responJson.restaurant;
  },

  async postReview(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson;
  },
};

export default RestaurantSource;
