<template>
<v-container fluid fill-height align="center">

  <v-row
    id="a"
  >
    <v-col
    id="b"
    align-self="center"
    v-if="!$store.state.username"
    >
      <v-sheet  id="content" class="pa-2 ma-2">
        <login-view />

      </v-sheet>
    </v-col>



  <v-col v-else>

      <router-view />

  </v-col>
</v-row>
</v-container>


</template>

<script >

import LoginView from './views/LoginView.vue';


export default {
  data() {
    return {
      color: '#00FF11'
    }
  },
  components: {
    LoginView
  },

  methods:{
    logout(){
      this.$store.commit('logout')
    },
  },
  mounted(){
    this.$store.commit('initializerStore')
  }


};
</script>


<style>
/* CUSTOM STYLE */

</style>
