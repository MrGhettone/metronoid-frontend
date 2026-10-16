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
        <li><router-link to="/login" @click="closeMenu">Accesso</router-link></li>
        <li><router-link to="/register" @click="closeMenu">Inizia Colonizzazione</router-link></li>
      </ul>
    </div>
  </nav>
</template>
