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
  <div class="sci-fi-panel">
    <div class="panel-header">
      <h2>Crea un account</h2>
      <p class="subtitle">Inizia oggi la tua prova gratuita</p>
    </div>

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

        <button type="submit" :disabled="!isFormValid || isLoading" class="btn-sci-fi">
          <span v-if="!isLoading">Registrati</span>
          <span v-else class="loader"></span>
        </button>
      </form>

      <p class="footer-text">
        Hai già un account?
        <router-link to="/login">Accedi qui</router-link>
      </p>
    </div>
</template>

<style scoped>

</style>