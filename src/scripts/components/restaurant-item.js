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
      <picture>
        <source media="(min-width: 800px)" srcset="${CONFIG.BASE_IMAGE_URL_LARGE + this._restaurant.pictureId}">
        <source media="(min-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_MEDIUM + this._restaurant.pictureId}">
        <img data-src="${CONFIG.BASE_IMAGE_URL_SMALL + this._restaurant.pictureId}" alt="${this._restaurant.name}" crossorigin="anonymous" class="card-image lazyload">
      </picture>
      <div class="card-body">
        <div class="rating">
          <span class="material-icons">star</span>
          <p tabindex="0">${this._restaurant.rating}</p>
        </div>
        <div class="card-title">
          <h3 tabindex="0">
            <a href="${`/#/detail/${this._restaurant.id}`}">${this._restaurant.name}</a>
          </h3>
        </div>
        <div class="card-desc">
          <p>${this._restaurant.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
