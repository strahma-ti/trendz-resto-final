import RestaurantApiSource from '../../data/restaurantapi-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <app-hero></app-hero>
    <div class="restaurant-list" id="restaurant-list">
    </div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.listRestaurants();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurantContainer.innerHTML = '';

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
