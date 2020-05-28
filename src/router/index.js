import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/Jobs.vue'),
  },
  {
    path: '/works',
    name: 'works',
    component: () => import(/* webpackChunkName: "works" */ '../views/Works.vue'),
  },
  {
    path: '/tech',
    name: 'tech',
    component: () => import(/* webpackChunkName: "tech" */ '../views/Technologies.vue'),
  },
  {
    path: '/education',
    name: 'education',
    component: () => import(/* webpackChunkName: "education" */ '../views/CommunityEducation.vue'),
  },
  {
    path: '/uses',
    name: 'uses',
    component: () => import(/* webpackChunkName: "uses" */ '../views/Uses.vue'),
  },
  {
    path: '/404',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "404" */ '../views/PageNotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
