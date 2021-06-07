import CONFIG from '../../globals/config';

const createCategoriesItem = (category) => `
  <span tabindex="0">${category.name}</span>
`;

const createMenuItem = (menu) => `
  <li tabindex="0">${menu.name}</li>
`;

const createCustomerReviews = (customer) => `
  <div class="restaurant__reviews__box">
    <h5 tabindex="0">${__convertHTML(customer.name)}</h5>
    <small tabindex="0" class="review">${__convertHTML(customer.review)}</small>
    <small tabindex="0"><i>${customer.date}</i></small>
  </div>
`;

const __convertHTML = (str) => {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    '\'': '&apos;',
    '/': '1',
    '#': '3',
  };

  if (str.length > 100) str = str.substring(0, 100);
  return str.split('').map((char) => {
    return entities[char] || char;
  }).join('');
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="card">
    <div class="card-location">
      <img src="./icons/icon_place.svg" class="svg" alt="location">
      <p tabindex="0">${restaurant.city}</p>
    </div>
    <img src="${CONFIG.BASE_IMAGE_URL + `small/` + restaurant.pictureId}" class="card-image" alt="${restaurant.name}">
    <div class="card-body">
      <div class="rating">
        <img src="./icons/icon_star.svg" class="svg" alt="star">
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
  <img src="${CONFIG.BASE_IMAGE_URL + 'large/' + restaurant.pictureId}" alt="${restaurant.name}">
  <div class="restaurant__detail">
    <h2 tabindex="0">${restaurant.name}</h2>

    <div class="rating">
      <img src="./icons/icon_star.svg" class="svg" alt="rating" name="rating">
      <p tabindex="0" aria-label="rating">${restaurant.rating}</p>
    </div>

    <div class="restaurant__address">
      <img src="./icons/icon_store.svg" class="svg" alt="restaurant">
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


export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createCategoriesItem,
  createMenuItem,
  createCustomerReviews,
};
