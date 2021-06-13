import RestaurantSource from '../data/restaurant-source';

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
      alert('Input tidak boleh kosong!');
    }
  },

  async _sendReview(data) {
    const response = await RestaurantSource.sendingReview(data);
    console.log(response);
  },

};

export default FormReviewInitiator;
