import { createRouter, createWebHistory } from 'vue-router';
// Importa i tuoi componenti (creali se non esistono ancora in src/views/)
import LandingPage from '../views/LandingPage.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Mercato from '../views/Mercato.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/mercato',
    name: 'Mercato',
    component: Mercato
  }
];

const router = createRouter({
  // Gestisce la cronologia del browser (permette di usare le frecce avanti/indietro)
  history: createWebHistory(),
  routes
});

export default router;