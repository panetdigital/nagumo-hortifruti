<!-- pages/gestao-inventario.vue -->
<template>
  <v-container>
    <v-row>
      <v-col>
        <v-alert :value="lastUpdateDate !== null" color="azul-cinza-clarear-4" icon="mdi-check-circle">
          Data de ultima atualização: {{ formatDateTime(lastUpdateDate) }}
        </v-alert>


        <!-- <v-h1>Listado de Productos</v-h1> -->

        <ProductList :products="products" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { format } from 'date-fns';

import ProductList from '@/components/ProductList.vue';
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      lastUpdateDate: null,
    };
  },
  components: {
    ProductList,
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    formatDateTime(dateTime) {
      // Obter a data e hora no fuso horário do Brasil (Brasília)
      const dateInBrazilTimezone = new Date(dateTime).toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });

      // Formatar a data e hora para o formato dd-mm-aaaa HH:MM:SS
      return format(new Date(dateInBrazilTimezone), 'dd-MM-yyyy HH:mm:ss');
    },
    fetchProducts() {
      const apiUrl = 'http://54.207.231.105:8989/api/produtos';

      axios.get(apiUrl)
        .then(response => {
          this.products = response.data;
          // Assumindo que lastUpdateDate está no primeiro item da lista de produtos
          this.lastUpdateDate = this.products.length > 0 ? this.products[0].lastUpdateDate : null;
        
        })
        .catch(error => {
          console.error('Erro ao buscar produtos:', error);
        });
    },
  },
};
</script>

<style scoped>
/* Adicione estilos específicos do Vuetify aqui, se necessário */
</style>
