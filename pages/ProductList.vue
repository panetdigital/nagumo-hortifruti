
<!-- components/ProductList.vue -->
<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.name }} - Cantidad: {{ product.quantity }} - Disponible: {{ displayAvailability(product.available) }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    products: Array,
  },
  methods: {
    displayAvailability(available) {
      return available ? 'Sim' : 'Não';
    },
  },
};
</script>
