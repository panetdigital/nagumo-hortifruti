<template>
  <div>
    <h1>Exemplo de Requisição com Axios</h1>

    <button @click="fetchData">Buscar Dados</button>

    <div v-if="data">
      <h2>{{ data.coditem }}</h2>
      <p>{{ data.nome }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await this.$axios.get('http://15.228.47.247:3333/api/v1/produtos-hortifruti/201');
        this.data = response.data;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    },
  },
};
</script>
