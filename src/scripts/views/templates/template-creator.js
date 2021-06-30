const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <span class="material-icons">favorite_border</span>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <span class="material-icons">favorite</span>
  </button>
`;

const createBlankFavoriteTemplate = () => `
  <div class="empty-favorite">
    <span class="material-icons">folder_special</span>
    <p>You haven't added your favorite restaurant yet</p>
  </div>
`;

export {
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
  createBlankFavoriteTemplate,
};
