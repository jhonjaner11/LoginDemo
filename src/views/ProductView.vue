<template>
  <v-container >
    <ProductsList/>
  </v-container>

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
