import { createRouter, createWebHistory } from 'vue-router'
 
import Gallery from '../components/Gallery.vue';
import About from '../components/About.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: About,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/About.vue'),
    },
     {
      path: '/gallery',
      name: 'Gallery',
       component: Gallery,
    }
  ],
})

export default router
