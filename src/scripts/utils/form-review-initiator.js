import RestaurantSource from '../data/restaurant-source';
import AlertInitiator from './alert-initiator';

const FormReviewInitiator = {
  init({ data }) {
    this._data = data;

    this._validateData();
  },

  _validateData() {
    const { name, review } = this._data;

    if (name !== '' || review !== '') {
      this._sendReview(this._data);
    } else {
      AlertInitiator.showAlert({
        title: 'Hey!',
        message: 'The input cannot be empty!',
        icon: 'warning',
      });
    }
  },

  async _sendReview(data) {
    try {
      const response = await RestaurantSource.postReview(data);
      console.log(response);
      AlertInitiator.showAlert({
        title: 'Success',
        message: 'Thank you for your review',
        icon: 'success',
      });
    } catch (error) {
      AlertInitiator.showAlert({
        title: `Oopss...`,
        message: `Something went wrong!`,
        icon: 'error',
      });
      console.log(error);
    }
  },

};

export default FormReviewInitiator;
