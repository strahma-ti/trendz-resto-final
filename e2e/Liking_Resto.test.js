/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');

  I.seeElement('.restaurant-name');
  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking resto', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-name');
  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant-item');
  // eslint-disable-next-line no-unused-vars
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name');

  I.click('.restaurant-name');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.dontSeeElement('.restaurant-item');

  I.amOnPage('/');
  I.seeElement('.restaurant-name');
  const firstRestaurantAfterCancel = locate('.restaurant-name').first();
  const firstRestaurantTitleAfterCancel = await I.grabTextFrom(firstRestaurantAfterCancel);

  assert.strictEqual(firstRestaurantTitle, firstRestaurantTitleAfterCancel);
});
