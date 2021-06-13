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
      AlertInitiator.showAlert('', 'The input cannot be empty!', 'warning');
    }
  },

  async _sendReview(data) {
    try {
      const response = await RestaurantSource.postReview(data);
      console.log(response);
      AlertInitiator.showAlert('Success', 'Thank you for your review', 'success');
    } catch (error) {
      AlertInitiator.showAlert(`Oopss...`, `Something went wrong!`, 'error');
      console.log(error);
    }
  },

};

export default FormReviewInitiator;
