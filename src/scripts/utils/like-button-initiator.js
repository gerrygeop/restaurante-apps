import FavoriteRestaurantIdb from '../data/favorite-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';
import AlertInitiator from './alert-initiator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.getElementById('likeButton');
    likeButton.addEventListener('click', async () => {
      try {
        await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
        this._renderButton();
        AlertInitiator.showAlert('Added to favorites', '', 'success');
      } catch (error) {
        AlertInitiator.showAlert('Oopss..', `Can't be added to favorites`, 'error');
      }
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.getElementById('likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
