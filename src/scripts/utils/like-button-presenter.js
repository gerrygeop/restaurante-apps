import { createLikeButtonTemplate, createUnlikeButtonTemplate } from '../views/templates/template-creator';
import AlertInitiator from './alert-initiator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

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
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.getElementById('likeButton');
    likeButton.addEventListener('click', async () => {
      try {
        await this._favoriteRestaurants.putRestaurant(this._restaurant);
        this._renderButton();
        AlertInitiator.showAlert({
          title: 'Added to favorites',
          message: '',
          icon: 'success',
        });
      } catch (error) {
        AlertInitiator.showAlert({
          title: 'Oopss..',
          message: `Can't be added to favorites`,
          icon: 'error',
        });
      }
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();

    const likeButton = document.getElementById('likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
