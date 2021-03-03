import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/about',
    meta: { title: 'About' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/About.vue'),
    // component: About
  },
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
    path: '/app',
    meta: { title: 'App' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/app/Main.vue'),
    // component: App-Main
  },
  {
    path: '/register',
    meta: { title: 'Registrieren' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/register/Main.vue'),
    // component: Register
  },
  {
    path: '/plus',
    meta: { title: '' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/register/Checkout.vue'),
    // component: Register-Checkout
  },
  { path: '/:path(.*)', component: NotFound },
]
