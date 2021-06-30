/* eslint-disable new-cap */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('restaurant-list');
  I.see(`You haven't added your favorite restaurant yet`, '.empty-favorite');
});
