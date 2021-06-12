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

  static async sendingReview(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: data,
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
