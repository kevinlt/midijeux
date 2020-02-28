import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Games from '../views/Games.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/jeux',
    name: 'Jeux',
    component: Games,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
