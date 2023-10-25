<!-- components/ListaDeProdutos.vue -->
<template>
    
    <div>
        
      <h2>Lista de Produtos</h2>
      <v-data-table :headers="headers" 
      :items="produtos" 
      item-key="id"
      class="elevation-1"
      loading
      loading-text="Carregando, por favor espere"
      >

        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Produtos</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
        <template v-slot:items="props">
          <td>{{ props.item.coditem }}</td>
          <td>{{ props.item.nome }}</td>
          <td>{{ props.item.grupo }}</td>
        </template>
      </v-data-table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        produtos: [],
        headers: [
          { text: 'Código do Etiq', value: 'coditem' },
          { text: 'Nome', value: 'nome' },
          { text: 'Grupo', value: 'grupo' },
        ],
      };
    },
    async created() {
      // Carregar a lista de produtos ao iniciar o componente
      await this.carregarProdutos();
    },
    methods: {
      async carregarProdutos() {
        try {
          // Fazer chamada à API para obter a lista de produtos
          const response = await this.$axios.get('http://15.228.47.247:3333/api/v1/produtos-hortifruti/');
  
          // Atualizar o array de produtos com os dados recebidos
          this.produtos = response.data;
        } catch (error) {
          console.error('Erro ao carregar lista de produtos:', error);
          // Pode adicionar lógica para exibir uma mensagem de erro ao usuário
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione estilos personalizados aqui, se necessário */
  </style>
  