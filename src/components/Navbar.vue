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
  <nav class="navbar sci-fi-header">
    <div class="nav-container">
      <router-link to="/" class="logo holo-text">
        <span class="icon">⬢</span> ASTRA<span class="em">COMMERCE</span>
      </router-link>

      <button class="hamburger" @click="toggleMenu">
        <span :class="{ 'bar-top': isMenuOpen }" class="sci-fi-bar"></span>
        <span :class="{ 'bar-mid': isMenuOpen }" class="sci-fi-bar"></span>
        <span :class="{ 'bar-bot': isMenuOpen }" class="sci-fi-bar"></span>
      </button>

      <ul class="nav-links" :class="{ 'is-active': isMenuOpen }">
        <li><router-link to="/" @click="closeMenu">Sistema</router-link></li>
        <li><router-link to="/mercato" @click="closeMenu">Mercato</router-link></li>
        <li><router-link to="/login" @click="closeMenu" class="btn-holo">Accesso</router-link></li>
        <li><router-link to="/register" @click="closeMenu" class="btn-neon">Inizia Colonizzazione</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: rgba(5, 5, 9, 0.9);
  backdrop-filter: blur(5px); /* Effetto vetro sfocato */
  border-bottom: var(--border-sci-fi);
  box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);
  /* ... resto del layout identico a prima ... */
}

.holo-text {
  color: var(--primary-neon);
  text-shadow: var(--neon-shadow);
  letter-spacing: 2px;
}
.holo-text .em { color: white; font-weight: 300; }

.nav-links a { color: var(--text-main); transition: 0.3s; }
.nav-links a:hover { color: var(--primary-neon); text-shadow: var(--neon-shadow); }

/* Bottone Olografico (solo bordo e testo) */
.btn-holo {
  border: 1px solid var(--secondary-neon);
  color: var(--secondary-neon) !important;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: transparent;
}
.btn-holo:hover {
  background: rgba(79, 172, 254, 0.1);
  box-shadow: 0 0 10px rgba(79, 172, 254, 0.3);
}

/* Bottone Neon Pieno (Cyan brillante) */
.btn-neon {
  background-color: var(--primary-neon);
  color: var(--bg-space) !important;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  box-shadow: var(--neon-shadow);
}
.btn-neon:hover {
  box-shadow: 0 0 20px rgba(0, 242, 254, 0.8);
}

/* Stile barrette hamburger scure/cyan */
.sci-fi-bar { background-color: var(--primary-neon) !important; box-shadow: var(--neon-shadow); }

/* ... media queries per mobile identiche, ma usa lo sfondo scuro ... */
</style>