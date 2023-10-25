<!-- atualisarProduto.vue -->

<template>
  <div>
    <!-- ... outros códigos ... -->
    <FrutasTable :grupos="grupos" />
    <!-- ... outros códigos ... -->
  </div>
</template>

<script>
import FrutasTable from '~/components/FrutasTable.vue';

export default {
  components: {
    FrutasTable,
  },
  data() {
    return {
      grupos: ['Fruta', 'legume', 'granel', 'bandeija', 'verdura', 'rais'],
      // ... outros dados ...
    };
  },
  // ... outros métodos ...
};
</script>
