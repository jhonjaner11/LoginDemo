<template>
  <div>

    <v-container >

      <SaleList></SaleList>

    </v-container>


  </div>

</template>

<script >
  import SaleList from '@/components/SaleList.vue';
  export default {
  data: () => ({
    drawer: false,
    group: null,



  }),
  components:{
    SaleList
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
