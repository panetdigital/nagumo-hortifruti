<!-- components/FrutaForm.vue -->
<template>
    <v-form @submit.prevent="submitForm">
      <v-container>
        <h2>Cadastro novo produto</h2>
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
            <v-text-field v-model="fruta.imagem" label="imagem"></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="fruta.link" label="link"></v-text-field>
          </v-col>
        </v-row>
        <!-- Adicione os outros campos do formulário conforme necessário -->
        <v-btn type="submit" color="primary">Cadastrar</v-btn>

         <!-- Adicionando a mensagem de confirmação -->
      <v-snackbar v-model="confirmationMessage" timeout="3000" color="success">
        Produto cadastrado com sucesso!
      </v-snackbar>

      </v-container>
    </v-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fruta: {
          cod: '',
          coditem: '',
          nome: '',
          grupo:'',
          imagem:'',
          link:'',
          // Adicione os outros campos do objeto conforme necessário
        },
        grupos: ['Fruta', 'legume', 'granel', 'bandeija','verdura','rais'],
        confirmationMessage: false, // Adicionando estado para exibir a mensagem de confirmação
      };
    },
    methods: {
    async submitForm() {
      try {
        // Enviando dados do formulário para a API Adonis.js usando Axios
        const response = await this.$axios.post('http://54.233.235.158/api/produtos', this.fruta);

        console.log('Produto cadastrado com sucesso:', response.data);
       
        // Exibindo a mensagem de confirmação
        this.confirmationMessage = true;

          // Aguardar o tempo definido e, em seguida, redirecionar para a lista de produtos
          setTimeout(() => {
          this.$router.push('/listar-produtos');
        }, 30000);

        // Limpar os campos do formulário após o envio bem-sucedido
        this.fruta = {
          cod:'',
          coditem:'',
          nome: '',
          preco: '',
          grupo: null,
          link:'',
          imagem:'',
        };
      } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
        // Pode adicionar lógica para exibir uma mensagem de erro ao usuário
      }
    },
  },
  };
  </script>
  