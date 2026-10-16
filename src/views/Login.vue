<template>
    <div class="sci-fi-panel">

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
                <span v-if="!isLoading">Stabilisci Connessione</span>
                <span v-else class="loader"></span>
            </button>
        </form>
    </div>
</template>

<script>
    import axios from "../../axios";
    import router from '../router';

    export default
    {
        data()
        {
            return {
                form: {
                    email: '',
                    password: '',
                    rememberMe: false
                },
                error: '',
                isLoading: false
            };
        },
        props: [],
        components: [],
        computed: {
            load() {
                this.form;
                this.error;
            },
        },
        mounted()
        {

        },
        methods:
        {
            async login()
            {
                this.isLoading = true;
                this.errorMessage = '';

                try
                {
                    var data = await axios.post("/login", this.form);
                    localStorage.setItem("token", data.data.token); // Salva token
                    this.error = "";
                    router.push('/app');
                    // alert("Login eseguito!");
                }
                catch (err)
                {
                    console.log(err);
                    this.error = err.response?.data?.message || "Errore di login";
                }
            },
            async handleLogin()
            {

                try {
                    // Simuliamo una chiamata API (es. con axios)
                    console.log("Dati inviati:", form);

                    // Esempio di logica: se successo, vai alla dashboard o home
                    setTimeout(() => {
                        isLoading.value = false;
                        // router.push('/dashboard'); // Decommenta quando avrai la rotta
                        alert("Login effettuato con successo!");
                    }, 1500);

                }
                catch (error)
                {
                    isLoading.value = false;
                    errorMessage.value = "Email o password non validi. Riprova.";
                }
            }
        },
    };
</script>
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