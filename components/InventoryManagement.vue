<!-- components/InventoryManagement.vue -->
<template>
  <div>
    <h2>Ajuste de Inventario</h2>
    <form @submit.prevent="updateInventory">
      <label for="product">Selecciona un producto:</label>
      <select v-model="selectedProduct">
        <option v-for="product in products" :key="product.id" :value="product.id">{{ product.nome }}</option>
      </select>

      <label for="quantity">Cantidad:</label>
      <input type="number" v-model="quantity" />

      <label for="available">Disponible:</label>
      <input type="checkbox" v-model="available" /><br>

      <button type="submit">Actualizar Inventario</button>
    </form>

    <!-- Muestra el estado "disponible" personalizado -->
    <div>
      Estado Disponible: {{ available ? 'Sim' : 'Não' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: Array,
  },
  data() {
    return {
      selectedProduct: null,
      quantity: 0,
      available: false,
    };
  },
  methods: {
    updateInventory() {
      const selectedProductIndex = this.products.findIndex(product => product.id === this.selectedProduct);

      if (selectedProductIndex !== -1) {
        this.$set(this.products, selectedProductIndex, {
          ...this.products[selectedProductIndex],
          quantity: this.quantity,
          available: this.available,
        });

        // Aquí puedes enviar la actualización al servidor o realizar otras acciones necesarias.
      }
    },
  },
};
</script>
