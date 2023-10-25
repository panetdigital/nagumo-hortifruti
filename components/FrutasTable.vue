<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="frutas"
      :search="search"
      :loading="loading"
      item-key="id"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Lista de Frutas</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="search" label="Pesquisar" single-line hide-details></v-text-field>
          <v-dialog v-model="addDialog" max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">Adicionar Fruta</v-btn>
            </template>
           
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="openEditDialog(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
 <!-- Diálogo para addiciona item -->
 <v-dialog v-model="addDialog" max-width="600">
      <v-card>
        <v-card-title>Adicionar Fruta</v-card-title>
        <v-card-text>
          <FrutaForm :fruta="selectedItem" @frutaCadastrada="carregarFrutas" />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="cancelarAdd">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Diálogo para editar item -->
  <v-dialog v-model="editDialog" max-width="600">
    <v-card>
      <v-card-title>Editar Fruta</v-card-title>
      <v-card-text>
        <FrutaEdicaoForm :fruta="selectedItem" :grupos="grupos" />
      </v-card-text>
      <v-card-actions>
        <v-btn nuxt
            to="/" >Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  </div>
</template>

<script>
import FrutaEdicaoForm from '~/components/FrutaEdicaoForm.vue'; // Certifique-se de importar o componente de formulário

export default {
  components: {
    FrutaEdicaoForm,
  },
  data() {
    return {
      headers: [
       /*  { text: 'Código', value: 'cod' }, */
        { text: 'Código do Item', value: 'coditem' },
        { text: 'Nome', value: 'nome' },
        // Adicione outros campos da tabela conforme necessário
        { text: 'Ações', value: 'actions', sortable: false },
      ],
      frutas: [],
      search: '',
      loading: false,
      dialog: false,
      selectedItem: null,
      confirmDialog: false,
      editDialog: false,
      addDialog:false,
      grupos: [],  // Certifique-se de inicializar como um array vazio ou com os valores corretos
    };
  },
  async created() {
    await this.carregarFrutas();
  },
  methods: {
    async carregarFrutas() {
      try {
        this.loading = true;
        // Faça a chamada à API para obter a lista de frutas
        // Substitua 'http://sua-api.com/frutas' pelo seu endpoint real
        const response = await this.$axios.get('http://54.233.235.158/api/produtos');
        this.frutas = response.data;
      } catch (error) {
        console.error('Erro ao carregar frutas:', error);
      } finally {
        this.loading = false;
      }
    },

    openEditDialog(item) {
  if (item) {
    // Clonar o item para evitar referências diretas
    this.selectedItem = JSON.parse(JSON.stringify(item));
    this.editDialog = true;
  }
},


cancelarAdd() {
  // Fechar o diálogo de edicionar
    this.addDialog = false;
  this.selectedItem = null;
  },

cancelarEdicao() {
  // Fechar o diálogo de edição
    this.editDialog = false;
    this.selectedItem = null;
  },


    async deleteItem(item) {
    const confirmarExclusao = confirm('Tem certeza que deseja excluir esta fruta?');
    
    if (confirmarExclusao) {
      try {
        // Remover o item da lista local
        const index = this.frutas.findIndex((fruta) => fruta.id === item.id);
        if (index !== -1) {
          this.frutas.splice(index, 1);
        }

        // Fazer a chamada à API para excluir o item no backend- vou desativar isso
       /*  await this.$axios.delete(`http://54.233.235.158/api/produtos/${item.id}`);
         */
        console.log('Fruta excluída com sucesso.');
      } catch (error) {
        console.error('Erro ao excluir fruta:', error);
      }
    }
  },
},
};
</script>
