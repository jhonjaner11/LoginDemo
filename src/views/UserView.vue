<template>
  <div>

    <v-container >
      <v-row>
        <v-col v-for="item in usuarios" lg="6" md="6" xs="12" sm="12">
          <v-card
          width="400" class="mx-auto" dark
          >
          <v-card-title primary-title>
            {{item.name}} <v-icon> mdi-domain</v-icon>
          </v-card-title>
          <v-card-subtitle>{{item.cargo}}</v-card-subtitle>


          <v-card-text>

          </v-card-text>
        </v-card>
        </v-col>
      </v-row>
      <div >


      </div>


    </v-container>


  </div>

</template>

<script >
  // import DefaultView from './View.vue';
  export default {
  data: () => ({
    drawer: false,
    group: null,
    usuarios: [
      {
        name: "Paola",
        cargo: "Jefe",
        to: "/",
      },

      {
        name: "Azdy",
        cargo: "Cajero",
        to: "/",
      },

    ],

    usuarios2: ["1","2"]
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
