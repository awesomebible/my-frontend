import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/kontakt',
    meta: { title: 'Kontakt' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/kontakt/Main.vue'),
    // component: Contact
  },
  {
    path: '/login',
    meta: { title: 'Anmelden' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/login/Main.vue'),
    // component: Register
  },
  {
    path: '/purchase',
    meta: { title: 'Plus kaufen' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/login/Purchase.vue'),
    // component: Register-Checkout
  },
  { path: '/:path(.*)', component: NotFound },
]
