import CONFIG from '../../globals/config';
import convertHTML from '../../utils/convert-html-helper';

const createCategoriesItem = (category) => `
  <span tabindex="0">${category.name}</span>
`;

const createMenuItem = (menu) => `
  <li tabindex="0">${menu.name}</li>
`;

const createCustomerReviews = (customer) => `
  <div class="restaurant__reviews__box">
    <h4 tabindex="0">${convertHTML(customer.name)}</h4>
    <p tabindex="0">${convertHTML(customer.review)}</p>
    <i tabindex="0">${customer.date}</i>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="card">
    <div class="card-location">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      <p tabindex="0">${restaurant.city}</p>
    </div>
    <img src="${CONFIG.BASE_IMAGE_URL + `medium/` + restaurant.pictureId}" class="card-image" alt="${restaurant.name}" crossorigin="anonymous">
    <div class="card-body">
      <div class="rating">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#e17203"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
        <p tabindex="0">${restaurant.rating}</p>
      </div>
      <div class="card-title">
        <h3 tabindex="0">
          <a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
        </h3>
      </div>
      <div class="card-desc">
        <p>${restaurant.description}</p>
      </div>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <img src="${CONFIG.BASE_IMAGE_URL + 'large/' + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
  <div class="restaurant__detail">
    <h2 tabindex="0">${restaurant.name}</h2>

    <div class="rating">
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#e17203"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
      <p tabindex="0" aria-label="rating">${restaurant.rating}</p>
    </div>

    <div class="restaurant__address">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e17203"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg>
      <p tabindex="0">${restaurant.address}, ${restaurant.city}</p>
    </div>

    <div class="restaurant__category">
      <small tabindex="0">Categories:</small>
      <div class="restaurant__list__category" id="categories"></div>
    </div>
    <br/>
    <div class="restaurant__menu">
      <h3 tabindex="0">Menus</h3>
      <div class="restaurant__menu__card">
        <h4 tabindex="0">Foods</h4>
        <ul id="foods-list"></ul>
      </div>
      <div class="restaurant__menu__card">
        <h4 tabindex="0">Drinks</h4>
        <ul id="drinks-list"></ul>
      </div>
    </div>
    <br/>
    <div class="restaurant__description">
      <h3 tabindex="0">Description</h3>
      <p tabindex="0">${restaurant.description}</p>
    </div>
    <br/>
    <div class="restaurant__customer__reviews" id="customerReviews">
      <h3 tabindex="0">Reviews</h3>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
  </button>
`;


export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createCategoriesItem,
  createMenuItem,
  createCustomerReviews,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
