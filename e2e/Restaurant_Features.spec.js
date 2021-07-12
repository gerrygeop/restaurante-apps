const assert = require('assert');

/* eslint-disable new-cap */
Feature('Restaurant Features');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.see(`You haven't added your favorite restaurant yet`, '.empty-favorite');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('a.card-title');

  const firstRestaurant = locate('a.card-title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('a.card-title');

  const favoriteRestaurantName = await I.grabTextFrom('a.card-title');

  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);
  I.see(favoriteRestaurantName);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('a.card-title');

  const firstRestaurant = locate('a.card-title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('a.card-title');
  const favoriteRestaurantName = await I.grabTextFrom('a.card-title');

  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);

  I.forceClick(favoriteRestaurantName);

  I.seeElement('#likeButton');
  I.forceClick('#likeButton');

  I.amOnPage('/#/favorite');

  I.dontSee(favoriteRestaurantName);
  I.see(`You haven't added your favorite restaurant yet`, '.empty-favorite');
});

Scenario('Customer review', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('a.card-title');
  I.click(locate('a.card-title').first());

  I.seeElement('form');

  const textReview = 'nice!';
  I.fillField('form input[name=name]', 'Jennie');
  I.fillField('form textarea[name=review]', textReview);
  I.click('#btnSubmit');

  const newReview = locate('.restaurant__review__box p').last();

  I.scrollTo(newReview);
  I.see(textReview, newReview);
});
