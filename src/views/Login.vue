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
  <div class="login-panel sci-fi-panel">

    <div class="panel-header">
      <h2 class="holo-text">Identificazione</h2>
      <p class="subtitle">Inserisci credenziali del Commando Logistico</p>
    </div>

    <form @submit.prevent="handleLogin">
      <div class="input-group sci-fi-input">
        <label for="email">Coordinated Email</label>
        <input id="email" v-model="form.email" type="email" placeholder="user@fleet.system" required />
      </div>

      <div class="input-group sci-fi-input">
        <label for="password">Chiave di Sicurezza</label>
        <input id="password" v-model="form.password" type="password" placeholder="••••••••" required />
      </div>

      <button type="submit" :disabled="isLoading" class="btn-sci-fi">
        Stabilisci Connessione
      </button>
    </form>
  </div>
</template>

<style scoped>
/* Stili specifici per il pannello di Login */

.login-panel {
  width: 100%;
  max-width: 450px; /* Larghezza massima del form per non farlo troppo grande */
  background: rgba(10, 15, 28, 0.9); /* Blu scuro traslucido */
  border: 1px solid rgba(0, 242, 254, 0.3);
  box-shadow: 0 0 20px rgba(0, 242, 254, 0.2);
  padding: 3rem; /* Spazio interno per non pressare il testo */
  border-radius: 8px; /* Un po' arrotondato per UX, o meno se preferisci più geometrico */
  position: relative;
}

/* Header del pannello */
.panel-header { margin-bottom: 2.5rem; text-align: center; }
.holo-text { color: #00f2fe; text-shadow: 0 0 10px rgba(0, 242, 254, 0.6); text-transform: uppercase; }
.subtitle { color: #94a3b8; font-size: 0.9rem; }

/* Input Group */
.input-group { margin-bottom: 1.5rem; }
.input-group label { display: block; margin-bottom: 0.5rem; font-weight: bold; color: #e0e6ed; }

input {
  width: 100%;
  padding: 0.8rem;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255,255,255,0.1);
  color: #e0e6ed;
  border-radius: 4px;
}

input:focus {
  outline: none;
  border-color: #00f2fe;
  box-shadow: 0 0 10px rgba(0, 242, 254, 0.4);
}

/* Bottone */
.btn-sci-fi {
  width: 100%;
  padding: 0.9rem;
  background: transparent;
  border: 1px solid #00f2fe;
  color: #00f2fe;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
}

.btn-sci-fi:hover {
  background: #00f2fe;
  color: #050509;
  box-shadow: 0 0 15px rgba(0, 242, 254, 0.7);
}
</style>