import Home from './views/Home.vue'

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
    // component: Login
  },
  {
    path: '/account/reset-password',
    meta: { title: 'Passwort zurücksetzen' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/login/ResetPassword.vue'),
    // component: Reset-Password
  },
  {
    path: '/app',
    meta: { title: 'Dashboard' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/app/Dashboard.vue'),
    // component: App-Dashboard
  },
  {
    path: '/:path(.*)',
    meta: { title: 'Error 404' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/NotFound.vue'),
    // component: FourOFour
  },
  
]
