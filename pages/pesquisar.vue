<template>
  <div>
    <v-autocomplete
      v-model="selectedFruit"
      :items="fruits"
      label="Pesquisar frutas"
      item-text="nome"
      @change="handleFruitSelection"
    >
      <template v-slot:item="{ item }">
        <div>{{ item.nome }} - Código: {{ item.coditem }}</div>
      </template>
    </v-autocomplete>

    <div>
      <h2>Resultados da Pesquisa:</h2>
      <div v-if="searchResults.length === 0">
        Nenhum resultado encontrado.
      </div>
      <div v-else>
        <v-table class="result-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Imagem</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="result in searchResults" :key="result.id">
              <td>{{ result.coditem }}</td>
              <td>{{ result.nome }}</td>
              <td><img :src="result.imagem" alt="Imagem do Produto" class="product-image" /></td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFruit: null,
      fruits: [],
      searchResults: [],
    };
  },
  methods: {
    async fetchFruitsFromApi() {
      try {
        const response = await fetch('http://54.233.235.158/api/produtos'); // Substitua pela URL real
        const data = await response.json();
        this.fruits = data;
      } catch (error) {
        console.error('Erro ao buscar frutas da API:', error);
      }
    },
    handleFruitSelection() {
      if (this.selectedFruit) {
        const query = this.selectedFruit.toLowerCase();
        this.searchResults = this.fruits.filter((fruit) =>
          fruit.nome.toLowerCase().includes(query) ||
          fruit.coditem.toLowerCase().includes(query)
        );

        // Limpe o campo de input (autocomplete) e redefina os resultados
        this.selectedFruit = null;
      } else {
        this.searchResults = [];
      }
    },
  },
  created() {
    this.fetchFruitsFromApi();
  },
};
</script>

<style>
.product-info {
  display: flex;
  align-items: center;
}

.product-image {
  max-width: 100px;
  max-height: 100px;
  margin-right: 10px;
}

.result-table {
  border-collapse: collapse;
  width: 100%;
}

.result-table th, .result-table td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.result-table th {
  background-color: #f2f2f2;
}
</style>
