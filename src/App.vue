<template>
    <div id="app-layout" class="sci-fi-grid">

        <Navbar />
        <main>
            <router-view />
        </main>

    </div>
</template>

<script setup>
    // Importiamo il RouterView per visualizzare le diverse pagine (es. Login, Register)
    import { RouterView } from 'vue-router'
    // Se hai creato un componente per la Navbar (es. Navbar.vue in components/), importalo qui
    import Navbar from './components/Navbar.vue'
</script>