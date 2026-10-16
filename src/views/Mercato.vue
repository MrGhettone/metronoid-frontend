<script setup>
import { ref } from 'vue';

// Simulazione dati risorse dal backend (Play-to-Earn)
const risorse = ref([
  { id: 1, nome: 'Metallo Lunare', icona: '🧱', scorta: 15000, prezzo: 1.25, trend: 'up' },
  { id: 2, nome: 'Cristalli Energetici', icona: '💎', scorta: 8200, prezzo: 3.50, trend: 'down' },
  { id: 3, nome: 'Gas Deuterio', icona: '🌬️', scorta: 2500, prezzo: 12.80, trend: 'stable' },
  { id: 4, nome: 'Isotopi Rari', icona: '☢️', scorta: 150, prezzo: 550.00, trend: 'up' },
]);

const tradeAction = (resourceName, type) => {
  alert(`${type === 'buy' ? 'Acquisto' : 'Vendita'} simulata di ${resourceName}`);
};
</script>

<template>
  <div class="market-container">
    <div class="sci-fi-panel market-panel">

      <div class="panel-header">
        <h1 class="holo-text">Terminale Mercato Galattico</h1>
        <p class="subtitle">Settore: <span class="highlight">Andromeda-IV</span> | Stato Rete: <span class="status-ok">ONLINE</span></p>
      </div>

      <div class="market-table-container">
        <table class="market-table">
          <thead>
            <tr>
              <th>Risorsa</th>
              <th>Scorta Globale</th>
              <th>Prezzo (ASTRA)</th>
              <th>Trend</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="risorsa in risorse" :key="risorsa.id" class="market-row">
              <td class="resource-cell">
                <span class="resource-icon">{{ risorsa.icona }}</span>
                <span class="resource-name">{{ risorsa.nome }}</span>
              </td>

              <td class="stock-cell">{{ risorsa.scorta.toLocaleString() }} Unit</td>

              <td class="price-cell holo-price">{{ risorsa.prezzo.toFixed(2) }} ⍟</td>

              <td class="trend-cell" :class="`trend-${risorsa.trend}`">
                <span v-if="risorsa.trend === 'up'">▲ Sali</span>
                <span v-else-if="risorsa.trend === 'down'">▼ Scendi</span>
                <span v-else>▬ Stabile</span>
              </td>

              <td class="actions-cell">
                <button @click="tradeAction(risorsa.nome, 'buy')" class="btn-sci-fi btn-buy">Acquista</button>
                <button @click="tradeAction(risorsa.nome, 'sell')" class="btn-sci-fi btn-sell">Vendi</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="panel-footer">
        <p>Tassa di transazione attuale: <span class="highlight">2.5%</span></p>
        <p class="crypto-note">Tutti i prezzi sono in ASTRA Token (AST)</p>
      </div>

    </div>
  </div>
</template>