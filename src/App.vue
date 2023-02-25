<template>

<template  v-if="!$store.state.username">
  <div  v-bind:style="{ backgroundColor: color}">
    <login-view />
  </div>
</template>
<template v-else>
  <div>
    <router-view />
  </div>
</template>

</template>

<script >

import LoginView from './views/LoginView.vue';


export default {
  data() {
    return {
      color: '#00FD12'
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
