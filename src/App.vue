<script setup>
// Importiamo il RouterView per visualizzare le diverse pagine (es. Login, Register)
import { RouterView } from 'vue-router'
// Se hai creato un componente per la Navbar (es. Navbar.vue in components/), importalo qui
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app-layout" class="sci-fi-grid">

    <Navbar />
    <main>
        <router-view />
    </main>

  </div>
</template>

<style>
/* CSS Globale (da mettere qui o in assets/main.css se preferisci) */

/* Assicuriamoci che l'html e il body non abbiano margini e occupino tutta l'altezza */


#app-layout {
  display: flex;
  flex-direction: column; /* Dispone Navbar in alto, Main sotto */
  height: 100vh; /* Forza l'altezza a 100% dell'altezza dello schermo */
  position: relative;
}

/* Sfondo a griglia opzionale visto nell'immagine */
.sci-fi-grid {
  background-image: linear-gradient(rgba(0, 242, 254, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 242, 254, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Il contenitore del contenuto principale */
.content-container {
  flex: 1; /* Occupa tutto lo spazio rimanente sotto la navbar */
  display: flex;
  justify-content: center; /* Centra orizzontalmente */
  align-items: center;     /* Centra verticalmente */
  padding: 20px;
  position: relative;
}
</style>