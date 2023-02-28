<template>
  <v-container >
    <ProvedorList/>
  </v-container>

</template>

<script >
import ProvedorList from '@/components/ProvedorList.vue';
  export default {
  data: () => ({
    drawer: false,
    group: null,



  }),
  components:{
    ProvedorList
  },
  }
</script>
