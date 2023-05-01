<template>
  <div>

    <v-container >
      <v-row>
        <v-col>
          <v-btn prepend-icon="mdi-account-plus-outline" color="success"
          @click="registrarOpen()">
          Registrar</v-btn>
        </v-col>
        <div class="text-center">
          <v-dialog
            v-model="dialog_register"
            width="auto"
          >


            <v-card width="400">
              <v-card-title primary-title >
                <v-icon>mdi-account-plus-outline</v-icon>
                {{titulo_card}}

              </v-card-title>

              <v-container>
                <v-text-field

                  color="primary"
                  label="Username"
                  v-model="user_username"
                  variant="underlined"
                ></v-text-field>

                <v-text-field

                  color="primary"
                  label="Nombres"
                  v-model="user_first_name"
                  variant="underlined"
                ></v-text-field>

                <v-text-field
                  v-model="user_last_name"
                  color="primary"
                  label="Apellidos"
                  variant="underlined"
                ></v-text-field>
                <v-text-field
                  v-model="user_telefono"
                  color="primary"
                  label="Telefono"
                  variant="underlined"
                ></v-text-field>

                <v-text-field
                  v-model="user_email"
                  color="primary"
                  label="Email"
                  variant="underlined"
                ></v-text-field>

                <v-text-field
                  v-model="user_password"
                  color="primary"
                  label="Password"
                  placeholder="Enter your password"
                  variant="underlined"
                ></v-text-field>

                <v-select
                  :items="roles"
                  v-model="user_rol"
                  label="Rol"
                ></v-select>

                <v-checkbox
                  v-model="user_estado"
                  color="secondary"
                  label="Activo"
                ></v-checkbox>
              </v-container>
              <v-card-actions>
                <v-btn color="primary"  @click="dialog_register = false">Cancelar</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary"  @click="guardarUsuario()">Actualizar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-row>


      <v-row>

        <v-col v-for="item in usuarios" lg="3" md="3"  xs="12" sm="12">

        <v-card  :color="this.getColor(item)">
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar
                color="grey"
              >
              <v-icon> mdi-clipboard-account</v-icon>

              </v-avatar>


              <h2>{{ item.first_name }}</h2>
              <h5>
                {{ item.rol }}
              </h5>
              <p class="text-caption mt-1">
                {{ item.email }}
              </p>
              <p class="text-caption mt-1">
                {{ item.telefono }}
              </p>



            </div>
          </v-card-text>
          <v-card-actions>
              <!-- <v-switch label="Activo" small></v-switch> -->

              <template  v-if="item.estado">

                <v-chip
                class="ma-2"

                color="green"
                >
                ACTIVO
                </v-chip>


            </template>
            <template v-else>

              <v-chip
                class="ma-2"
                color=""
              >
              INACTIVO
              </v-chip>
            </template>
              <v-spacer></v-spacer>
              <v-icon color="green-darken-2" @click="editarUsuario(item)"> mdi-pencil</v-icon>
              <v-icon color="red" @click="borrarUsuario(item.id)"> mdi-delete</v-icon>
          </v-card-actions>
        </v-card>
        </v-col>
      </v-row>



    </v-container>


  </div>

</template>

<script >
  // import DefaultView from './View.vue';
  import Swal from 'sweetalert2'
  export default {
  data: () => ({
    drawer: false,
    dialog_register : false,
    group: null,
    usuarios: [


    ],

    user_id : '',
    user_first_name: '',
    user_last_name: '',
    user_email: '',
    user_password: '',
    user_rol: '',
    user_name: '',
    user_telefono: '',
    user_estado: false,
    user_username: '',

    roles:['Admin', 'Cajero'],

    titulo_card : 'Registrar Usuario',

    colors :[
      'blue-lighten-5',
      'indigo-lighten-5',
      'deep-purple-lighten-5',
      'purple-lighten-5'
    ]



  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  computed:{
    // color: function(){
    //   console.log("color");
    //   let c = this.colors[this.getRandomInt(2)]
    //   console.log(c);
    //   return c
    // },
  },

  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },

    getColor(item){

      if (item.estado==false) {
        return 'grey'
      }else if(item.rol=='Admin') {
        return 'red-lighten-4'
      }else{
        return  'blue-lighten-5'
      }

    },

    getUsers(){
      this.usuarios = [];

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
    registrarOpen(){
      this.titulo_card= 'Registrar Usuario'
      this.user_name=''
      this.user_first_name = '',
      this.user_last_name =  '',
      this.user_email  ='',
      this.user_password = '',
      this.user_rol  = '',
      this.user_name = '',
      this.user_telefono ='',
      this.user_estado= '',
      this.user_username = '',
      this.dialog_register=true
    },
    editarUsuario(item){
      console.log(item);
      this.user_username = item.username,
      this.user_id =item.id,
      this.user_first_name = item.first_name,
      this.user_last_name =  item.last_name,
      this.user_email  =item.email,
      this.user_password = item.password,
      this.user_rol  = item.rol,
      this.user_name = item.name,
      this.user_telefono = item.telefono,
      this.user_estado= item.estado,

      this.titulo_card= 'Editar Usuario'
      this.dialog_register=true
    },
    guardarUsuario(){
      let that = this

      let user_id = this.user_id
      let data = {
        "first_name" : this.user_first_name,
        "last_name" : this.user_last_name,
        "username" : this.user_username,
        "email" : this.user_email,
        "telefono" : this.user_telefono,
        "password" : this.user_password,
        "rol" : this.user_rol,
        "estado" :this.user_estado,
      }


      if (this.titulo_card=='Registrar Usuario') {
        this.axios.post('/user/register', data)
        .then(function (response) {
          console.log(response);
          // handle success


        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {

          that.getUsers()
          that.dialog_register= false
          // always executed
        });
      }else{
        this.axios.put('/user/users/'+user_id, data)
        .then(function (response) {
          console.log(response);
          // handle success


        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {

          that.getUsers()
          that.dialog_register= false
          // always executed
        });
      }





    },

    borrarUsuario(id){

      Swal.fire({
        title: 'Desea borrar el Usuario?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          let that = this
          this.axios.delete('/user/users/'+ id)
            .then(function (response) {
              Swal.fire(
                'Usuario Borrado',
              )


            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .finally(function () {

              that.getUsers()

              // always executed
            });

        }
      })


    }


  },

  beforeMount() {
    console.log('hola');
    this.getUsers();

    // <div id="app" data-fizz="buzz"></div>
  },
};
</script>
