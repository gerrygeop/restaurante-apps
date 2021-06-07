import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responJson = await response.json();
    return responJson.restaurants;
  }

  static async detailRestaurant(id) {
    // eslint-disable-next-line new-cap
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responJson = await response.json();
    return responJson.restaurant;
  }
}

export default RestaurantSource;
