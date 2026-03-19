import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      // Permette di usare '@' come scorciatoia per la cartella src
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    // 1. Pulisce la cartella dist prima di ogni build
    emptyOutDir: true,
    // 2. Genera i sourcemaps (utile per il debug in produzione)
    sourcemap: false,
    // 3. Ottimizzazione chunk: raggruppa le librerie core in un file separato
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue'], // Mette Vue in un file a parte per migliorare il caching
        },
      },
    },
    // 4. Limite per l'incorporamento degli asset (immagini piccole incluse come base64)
    assetsInlineLimit: 4096, // 4kb
  },
  // Se pubblichi su una sottocartella o GitHub Pages, imposta il base:
  base: '/',
})