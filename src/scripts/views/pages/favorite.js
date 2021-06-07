const Favorite = {
  async render() {
    return `
      <section class="list-restaurant" id="favorite-section">
        <h2 tabindex="0">Favorite Restaurant</h2>
      </section>
    `;
  },

  async afterRender() {
    // TODO: Get favorite resto from indexDB
  },
};

export default Favorite;
