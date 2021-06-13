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
    try {
      const response = await RestaurantSource.postReview(data);
      console.log(response);
    } catch (error) {
      alert('Anda seperti nya offline');
    }
  },

};

export default FormReviewInitiator;
