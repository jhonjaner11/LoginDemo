<template>
  <v-container >
    <StockList/>
  </v-container>

</template>

<script >
import StockList from '@/components/StockList.vue';
  export default {
  data: () => ({
    drawer: false,
    group: null,



  }),
  components:{
    StockList
  },
  }
</script>
