import CONFIG from '../globals/config';
import convertHTML from '../utils/convert-html-helper';
import FormReviewInitiator from '../utils/form-review-initiator';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
    this._formCustomerReview();
  }

  render() {
    this.innerHTML = `
      <img src="${CONFIG.BASE_IMAGE_URL + 'large/' + this._restaurant.pictureId}" alt="${this._restaurant.name}" crossorigin="anonymous">
      <div class="restaurant__detail">
        <h2 tabindex="0">${this._restaurant.name}</h2>

        <div class="rating">
          <span class="material-icons">star</span>
          <p tabindex="0" aria-label="rating">${this._restaurant.rating}</p>
        </div>

        <div class="restaurant__address">
          <span class="material-icons">store</span>
          <p tabindex="0">${this._restaurant.address}, ${this._restaurant.city}</p>
        </div>

        <div class="restaurant__category">
          <small tabindex="0">Categories:</small>
          <div class="restaurant__list__category" id="categories">
            ${this._restaurant.categories.map((category) => `<span tabindex="0">${category.name}</span>`).join('')}
          </div>
        </div>

        <div class="restaurant__menu">
          <h3 tabindex="0">Menus</h3>
          <div class="restaurant__menu__wrapper">
            <div class="restaurant__menu__card">
              <h4 tabindex="0">Foods</h4>
              <ul id="foods-list">
                ${this._restaurant.menus.foods.map((food) => `<li tabindex="0">${food.name}</li>`).join('')}
              </ul>
            </div>
            <div class="restaurant__menu__card">
              <h4 tabindex="0">Drinks</h4>
              <ul id="drinks-list">
                ${this._restaurant.menus.drinks.map((drink) => `<li tabindex="0">${drink.name}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>

        <div class="restaurant__description">
          <h3 tabindex="0">Description</h3>
          <p tabindex="0">${this._restaurant.description}</p>
        </div>

        <div class="restaurant__customer__review" id="customerReviews">
          <h3 tabindex="0">Reviews</h3>
          <form>
            <input type="text" id="customerName" placeholder="Nama" required>
            <textarea rows="3" id="customerReview" placeholder="Berikan review anda" required></textarea>
            <button type="submit">Send</button>
          </form>
          ${this._restaurant.customerReviews.map((customer) => `
            <div class="restaurant__review__box">
              <h4 tabindex="0">${convertHTML(customer.name)}</h4>
              <p tabindex="0">${convertHTML(customer.review)}</p>
              <i tabindex="0">${customer.date}</i>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  _formCustomerReview() {
    const formReview = document.querySelector('form');
    formReview.addEventListener('submit', () => {
      FormReviewInitiator.init({
        data: {
          id: this._restaurant.id,
          name: formReview.querySelector('#customerName').value,
          review: formReview.querySelector('#customerReview').value,
        },
      });
    });
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
