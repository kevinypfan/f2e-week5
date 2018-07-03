import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Reading from './views/Reading.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/reading',
      name: 'reading',
      component: Reading
    }
  ]
});
