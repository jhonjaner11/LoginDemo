<template>
  <ProductsList/>
</template>

<script >
import ProductsList from '@/components/ProductsList.vue';
  export default {
  data: () => ({
    drawer: false,
    group: null,



  }),
  components:{
    ProductsList
  },
  }
</script>
