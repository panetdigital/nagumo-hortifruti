<!-- pages/ProductSearch.vue -->

<template>
  <div >
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Pesquisar nome de produto</h1>
         <!--  <v-autocomplete
            v-model="searchText"
            :items="filteredProducts"
            label="Pesquisar Produto"
            item-text="name"
            @input="filterProducts"
          ></v-autocomplete> -->

          <v-autocomplete
        :items="filteredProducts"
        append-inner-icon="mdi-microphone"
        auto-select-first
        class="flex-full-width"
        density="comfortable"
        item-props
        menu-icon=""
        placeholder="Pesquisar Produto"
        prepend-inner-icon="mdi-magnify"
        rounded
        theme="light"
        variant="solo"
        
        v-model="searchText"
          
            
            item-text="name"
            @input="filterProducts"
      ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      products: [
        // Substitua com sua lista de produtos
        { id: 1, name: 'Batata' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Limao' },
        // ...
      ],
    };
  },
  computed: {
    filteredProducts() {
      // Filtra os produtos com base no texto de pesquisa
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  methods: {
    filterProducts() {
      // Atualiza a lista de produtos filtrados com base no texto de pesquisa
      // Você também pode fazer uma chamada à API para obter dados em tempo real aqui
    },
  },
};
</script>

<style scoped>
.flex-full-width {
  background-color: rgb(190, 190, 202); /* Cor de fundo personalizada */
  color: rgb(19, 2, 2); /* Cor do texto personalizada */
}
</style>