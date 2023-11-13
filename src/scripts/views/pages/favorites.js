import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
    <div class="content">
    <h2>Your Favorites Resto</h2>
    <div id="restaurant-list" class="restaurant-list"></div>
    <p class="restaurant-item__not__found">Tidak ada resto untuk ditampilkan</p>
  </div>
`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurant-list');
    const notFoundMessage = document.querySelector('.restaurant-item__not__found');

    if (restaurants.length > 0) {
      notFoundMessage.style.display = 'none'; // Sembunyikan pesan jika ada restoran
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      notFoundMessage.style.display = 'block'; // Tampilkan pesan jika tidak ada restoran
    }
  },
};

export default Favorites;
