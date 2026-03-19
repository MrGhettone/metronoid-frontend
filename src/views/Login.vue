<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Usiamo un oggetto reactive per raggruppare i dati del form
const form = reactive({
  email: '',
  password: '',
  rememberMe: false
});

const isLoading = ref(false);
const errorMessage = ref('');

const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = '';

  try {
    // Simuliamo una chiamata API (es. con axios)
    console.log("Dati inviati:", form);

    // Esempio di logica: se successo, vai alla dashboard o home
    setTimeout(() => {
      isLoading.value = false;
      // router.push('/dashboard'); // Decommenta quando avrai la rotta
      alert("Login effettuato con successo!");
    }, 1500);

  } catch (error) {
    isLoading.value = false;
    errorMessage.value = "Email o password non validi. Riprova.";
  }
};
</script>

<template>
  <div class="login-container sci-fi-bg">
    <div class="scan-line"></div>

    <div class="login-card sci-fi-panel">
      <div class="panel-header">
        <span class="corner-tl"></span><span class="corner-tr"></span>
        <h2 class="holo-text">Identificazione</h2>
        <p class="subtitle">Inserisci credenziali del Commando Logistico</p>
      </div>

      <form @submit.prevent="handleLogin">
        <div class="input-group sci-fi-input">
          <label for="email">Coordinated Email</label>
          <input id="email" v-model="form.email" type="email" placeholder="user@fleet.system" required />
          <span class="input-bar"></span>
        </div>

        <div class="input-group sci-fi-input">
          <label for="password">Chiave di Sicurezza</label>
          <input id="password" v-model="form.password" type="password" placeholder="••••••••" required />
          <span class="input-bar"></span>
        </div>

        <button type="submit" :disabled="isLoading" class="btn-sci-fi">
          <span v-if="!isLoading">Stabilisci Connessione</span>
          <span v-else class="loader-sci-fi"></span>
        </button>
      </form>
      </div>
  </div>
</template>

<style scoped>
/* Sfondo con griglia sfocata */
.sci-fi-bg {
  background-image: linear-gradient(rgba(0, 242, 254, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 242, 254, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Linea orizzontale che scansiona lo schermo (animazione) */
.scan-line {
  position: fixed; top: 0; left: 0; width: 100%; height: 2px;
  background: rgba(0, 242, 254, 0.2);
  animation: scan 4s linear infinite;
  z-index: 1; opacity: 0.5;
}

.sci-fi-panel {
  background: var(--bg-card);
  border: var(--border-sci-fi);
  box-shadow: 0 0 20px rgba(0, 242, 254, 0.15);
  position: relative;
  overflow: hidden; /* Per tagliare angoli decorativi */
}

/* Angoli decorativi stile interfaccia militare */
.panel-header { position: relative; }
.corner-tl, .corner-tr {
  position: absolute; top: -10px; width: 20px; height: 20px;
  border-top: 2px solid var(--primary-neon);
}
.corner-tl { left: -10px; border-left: 2px solid var(--primary-neon); }
.corner-tr { right: -10px; border-right: 2px solid var(--primary-neon); }

h2.holo-text { color: var(--primary-neon); text-shadow: var(--neon-shadow); text-transform: uppercase; }
.subtitle { color: var(--text-muted); }

/* Input stilizzati */
.sci-fi-input input {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--text-main);
  border-radius: 2px; /* Meno arrotondati, più geometrici */
}
.sci-fi-input input:focus {
  border-color: var(--secondary-neon);
  box-shadow: 0 0 10px rgba(79, 172, 254, 0.4);
}

/* Pulsante principale */
.btn-sci-fi {
  background: transparent;
  border: 1px solid var(--primary-neon);
  color: var(--primary-neon);
  text-transform: uppercase;
  letter-spacing: 1px;
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%); /* Taglio geometrico */
  transition: 0.3s;
}
.btn-sci-fi:hover:not(:disabled) {
  background: var(--primary-neon);
  color: var(--bg-space);
  box-shadow: var(--neon-shadow);
}
.btn-sci-fi:disabled { border-color: var(--text-muted); color: var(--text-muted); }

/* Animazioni */
@keyframes scan { 0% { top: -10%; } 100% { top: 100%; } }

/* Applica concetti simili a Register.vue */
</style>

git config --global user.email "mrghettone@gmail.com"
git config --global user.name "Matteo Ghetti"