const assert = require('assert');

/* eslint-disable new-cap */
Feature('Restaurant Features');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.see(`You haven't added your favorite restaurant yet`, '.empty-favorite');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.card-title a');

  const firstRestaurant = locate('.card-title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-title a');

  const favoriteRestaurantName = await I.grabTextFrom('.card-title a');

  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);
  I.see(favoriteRestaurantName);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.card-title a');

  const firstRestaurant = locate('.card-title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.card-title a');
  const favoriteRestaurantName = await I.grabTextFrom('.card-title a');

  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);

  I.forceClick(favoriteRestaurantName);

  I.seeElement('#likeButton');
  I.forceClick('#likeButton');

  I.amOnPage('/#/favorite');

  I.dontSee(favoriteRestaurantName);
  I.dontSeeElement('restaurant-item');
  I.see(`You haven't added your favorite restaurant yet`, '.empty-favorite');
});
