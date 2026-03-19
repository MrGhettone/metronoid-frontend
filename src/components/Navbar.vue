<script setup>
import { ref } from 'vue';

// Stato per gestire l'apertura del menu su mobile
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Chiude il menu quando si clicca su un link (utile su mobile)
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="logo" @click="closeMenu">MyBrand</router-link>

      <button class="hamburger" @click="toggleMenu" aria-label="Menu">
        <span :class="{ 'bar-top': isMenuOpen }"></span>
        <span :class="{ 'bar-mid': isMenuOpen }"></span>
        <span :class="{ 'bar-bot': isMenuOpen }"></span>
      </button>

      <ul class="nav-links" :class="{ 'is-active': isMenuOpen }">
        <li><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/login" @click="closeMenu" class="btn-login">Accedi</router-link></li>
        <li><router-link to="/register" @click="closeMenu" class="btn-register">Registrati</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #42b883; /* Verde Vue */
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  transition: color 0.3s;
}

/* Pulsanti speciali */
.btn-register {
  background-color: #42b883;
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

/* Mobile Setup */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  background: none;
  border: none;
  gap: 5px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: #2c3e50;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    display: none; /* Nascosto di base */
  }

  .nav-links.is-active {
    display: flex; /* Mostra quando isMenuOpen è true */
  }

  /* Animazione Hamburger a X (opzionale) */
  .bar-top { transform: translateY(8px) rotate(45deg); }
  .bar-mid { opacity: 0; }
  .bar-bot { transform: translateY(-8px) rotate(-45deg); }
}
</style>