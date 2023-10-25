<template>
  <v-form @submit.prevent="submitForm">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="fruta.cod" label="Código"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="fruta.coditem" label="Código do Item"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="fruta.nome" label="Nome"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-select v-model="fruta.grupo" :items="grupos" label="Grupo"></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="fruta.imagem" label="Imagem"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="fruta.link" label="Link"></v-text-field>
        </v-col>
      </v-row>
      <!-- Adicione outros campos do formulário conforme necessário -->
      <v-btn type="submit" color="primary">Atualizar</v-btn>

      <!-- Adicionando a mensagem de confirmação -->
      <v-snackbar v-model="confirmationMessage" timeout="3000" color="success">
        Produto atualizado com sucesso!
      </v-snackbar>
    </v-container>
  </v-form>
</template>

<script>
export default {
  props: {
    fruta: {
      type: Object,
      required: true,
    },
    grupos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      confirmationMessage: false,
    };
  },
  watch: {
    fruta: {
      handler(newValue) {
        this.formFruta = { ...newValue };
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    async submitForm() {
      try {
        // Certifique-se de adicionar o ID do produto à URL
        const productId = this.fruta.id; // Assumindo que o ID do produto está presente em fruta.id
        const apiUrl = `http://54.233.235.158/api/produtos/${productId}`;

        // Envie os dados atualizados para a API
        const response = await this.$axios.put(apiUrl, this.formFruta);

        console.log('Atualizado com sucesso:', response.data);

        this.confirmationMessage = true;

        setTimeout(() => {
          this.$router.push('/');
        }, this.redirectTimeout);

        this.fruta = {
          cod: '',
          coditem: '',
          nome: '',
          preco: '',
          grupo: null,
          link: '',
          imagem: '',
        };
      } catch (error) {
        console.error('Erro ao atualizar produto:', error);
      }
    },
  },
};
</script>
