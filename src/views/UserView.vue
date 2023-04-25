<template>
  <div>

    <v-container >
      <v-row>
        <v-col v-for="item in usuarios" lg="6" md="6" xs="12" sm="12">
          <v-card
          width="400" class="mx-auto" dark
          to="/user-detail"
          >
          <v-card-title primary-title>
            <v-icon> mdi-clipboard-account</v-icon>{{item.name}}
          </v-card-title>
          <v-card-subtitle>{{item.rol}}</v-card-subtitle>


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


    ],


  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
    getUsers(){

      let that =this;


      this.axios.get('/user/users')
        .then(function (response) {
          // handle success

          response.data.forEach(element => {
            that.usuarios.push(element)
          });

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });


    },

  },

  beforeMount() {
    console.log('hola');
    this.getUsers();

    // <div id="app" data-fizz="buzz"></div>
  },
};
</script>
