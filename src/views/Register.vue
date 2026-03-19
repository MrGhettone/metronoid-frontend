<script setup>
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Dati del form
const form = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const isLoading = ref(false);
const errorMessage = ref('');

// --- LOGICA DI VALIDAZIONE ---

// Controlla se le password coincidono
const passwordsMatch = computed(() => {
  return form.password === form.confirmPassword;
});

// Controlla se il form è pronto per l'invio
const isFormValid = computed(() => {
  return (
    form.username.length >= 3 &&
    form.email.includes('@') &&
    form.password.length >= 6 &&
    passwordsMatch.value
  );
});

const handleRegister = async () => {
  if (!isFormValid.value) return;

  isLoading.value = true;
  errorMessage.value = '';

  try {
    // Qui simuli la chiamata al tuo backend (es: Axios post a /register)
    console.log("Registrazione in corso per:", form);

    setTimeout(() => {
      isLoading.value = false;
      alert("Account creato! Ora effettua il login.");
      router.push('/login');
    }, 2000);
  } catch (err) {
    isLoading.value = false;
    errorMessage.value = "Errore durante la registrazione. Forse l'email esiste già?";
  }
};
</script>

<template>
  <div class="register-container">
    <div class="register-card">
      <h2>Crea un account</h2>
      <p class="subtitle">Inizia oggi la tua prova gratuita</p>

      <form @submit.prevent="handleRegister">
        <div class="input-group">
          <label for="username">Nome Completo</label>
          <input id="username" v-model="form.username" type="text" placeholder="Mario Rossi" required />
        </div>

        <div class="input-group">
          <label for="email">Email</label>
          <input id="email" v-model="form.email" type="email" placeholder="mario@esempio.it" required />
        </div>

        <div class="input-group">
          <label for="password">Password (min. 6 caratteri)</label>
          <input id="password" v-model="form.password" type="password" placeholder="••••••••" required />
        </div>

        <div class="input-group">
          <label for="confirm">Conferma Password</label>
          <input
            id="confirm"
            v-model="form.confirmPassword"
            type="password"
            placeholder="••••••••"
            required
          />
          <p v-if="form.confirmPassword && !passwordsMatch" class="warning-text">
            Le password non coincidono
          </p>
        </div>

        <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>

        <button type="submit" :disabled="!isFormValid || isLoading" class="btn-register">
          <span v-if="!isLoading">Registrati</span>
          <span v-else class="loader"></span>
        </button>
      </form>

      <p class="footer-text">
        Hai già un account?
        <router-link to="/login">Accedi qui</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  padding: 20px;
}

.register-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 450px;
}

h2 { color: #2c3e50; margin-bottom: 0.5rem; }
.subtitle { color: #64748b; margin-bottom: 2rem; font-size: 0.9rem; }

.input-group { margin-bottom: 1.2rem; text-align: left; }
.input-group label { display: block; margin-bottom: 0.5rem; font-weight: 500; color: #475569; }

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
}

input:focus { outline: none; border-color: #42b883; }

.warning-text { color: #f59e0b; font-size: 0.8rem; margin-top: 0.3rem; }
.error-text { color: #ef4444; font-size: 0.85rem; margin-bottom: 1rem; }

.btn-register {
  width: 100%;
  padding: 0.8rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
}

.btn-register:disabled {
  background-color: #cbd5e1;
  cursor: not-allowed;
}

.footer-text { margin-top: 1.5rem; font-size: 0.9rem; color: #64748b; }
.footer-text a { color: #42b883; text-decoration: none; font-weight: bold; }

.loader {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #ffffff;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
  display: inline-block;
}
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
</style>