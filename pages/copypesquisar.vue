<template>
  <div>
    <v-autocomplete
      v-model="selectedFruit"
      :items="filteredFruits"
      label="Pesquisar frutas"
      item-text="nome"
      @change="handleFruitSelection"
    >
      <template v-slot:item="{ item }">
        <div>{{ item.nome }} - Código: {{ item.cod }}</div>
      </template>
    </v-autocomplete>

    <div>
      <h2>Resultados da Pesquisa:</h2>
      <div v-if="searchResults.length === 0">
        Nenhum resultado encontrado.
      </div>
      <div v-else>
        <v-table   class="result-table">
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
import fruitsData from "@/assets/fruits.json"; // Importe seus dados JSON

export default {
  data() {
    return {
      selectedFruit: null,
      fruits: fruitsData,
      searchResults: [],
    };
  },
  computed: {
    filteredFruits() {
      if (!this.selectedFruit) {
        return this.fruits;
      }

      return this.fruits.filter((fruit) =>
        fruit.nome.toLowerCase().includes(this.selectedFruit.toLowerCase())
      );
    },
  },
  methods: {
    handleFruitSelection() {
      if (this.selectedFruit) {
        const query = this.selectedFruit.toLowerCase();
        this.searchResults = this.fruits.filter((fruit) =>
          fruit.nome.toLowerCase().includes(query) ||
          fruit.cod.toLowerCase().includes(query)
        );

        // Limpe o campo de input (autocomplete) e redefina os resultados
        this.selectedFruit = null;
      } else {
        this.searchResults = [];
      }
    },
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
