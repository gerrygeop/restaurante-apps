import CONFIG from '../globals/config';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card-location">
        <span class="material-icons">place</span>
        <p tabindex="0">${this._restaurant.city}</p>
      </div>
      <img data-src="${CONFIG.BASE_IMAGE_URL_SMALL + this._restaurant.pictureId}" alt="${this._restaurant.name}" crossorigin="anonymous" class="card-image lazyload">
      <div class="card-body">
        <div class="rating">
          <span class="material-icons">star</span>
          <p tabindex="0">${this._restaurant.rating}</p>
        </div>
        <a href="${`/#/detail/${this._restaurant.id}`}" class="card-title">${this._restaurant.name}</a>
        <div class="card-desc">
          <p>${this._restaurant.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
