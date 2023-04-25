<template>



  <v-card>
    <v-toolbar color="white" density="compact">


      <v-toolbar-title>Categorias
      </v-toolbar-title>

      <v-spacer></v-spacer>




      <v-btn color="success" variant="flat"
       dark  size="small" @click="dialog_category" >NUEVO</v-btn>

    </v-toolbar>



      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-left">
              ID
            </th>
            <th class="text-left">
              Nombre
            </th>
            <th class="text-left">
              Descripcion
            </th>
            <th class="text-left">
              Actions
            </th>

          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in categorias"
            :key="item.id"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.descripcion }}</td>
            <td>
              <v-icon size="small" color="primary" v-on:click="editar(item)">mdi-pencil</v-icon>
              <v-icon size="small" color="red" @click="eliminar(item)">mdi-delete</v-icon>

            </td>


          </tr>
        </tbody>
      </v-table>

      <v-dialog
        v-model="dialog"
        width="400"
      >

        <v-card>
          <v-card-title primary-title>
            {{ titulo }}
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col><v-text-field
                name="name"
                label="Nombre"
                id="id"
                v-model="nombre_categoria"
              ></v-text-field></v-col>
              <v-col>
                <v-text-field
                name="descripcion"
                label="Descripcion"
                id="id"
                v-model="descripcion_categoria"
              ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="gray"  @click="dialog = false">Cerrar</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary"  @click="crear">{{texto_boton_dialog}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


    </v-card>


  </template>
  <script >
    //import axios from 'axios';
    // import DefaultView from './View.vue';
    export default {
    data: () => ({
      dialog: false,
      drawer: false,
      group: null,

      categorias: [],
      categorieSelect:[],


      nombre_categoria: '',
      descripcion_categoria: '',
      id_categoria: '',

      titulo: 'Nueva Categoria',
      texto_boton_dialog : 'Crear'


    }),

    watch: {
      group() {
        this.drawer = false;
      },
    },
    methods:{


      dialog_category(){
        this.titulo= 'Nueva Categoria'
        this.texto_boton_dialog = 'Crear'
        this.nombre_categoria= ''
        this.descripcion_categoria=''
        this.dialog= true
      },

      getCategories(){
        let that =this;
        this.categorias = []

        this.axios.get('/producto/categoria')
          .then(function (response) {
            // handle success
            response.data.forEach(element => {
              that.categorias.push(element)
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

      editar(item){
        console.log("editar");
        console.log(item);

        this.titulo= 'Editar Categoria',
        this.texto_boton_dialog = 'Editar'
        this.nombre_categoria= item.nombre
        this.descripcion_categoria = item.descripcion
        this.id_categoria = item.id


        this.dialog= true
      },

      eliminar(item){
        console.log("eliminar");
        console.log(item);
        let id= item.id
        let that = this

        this.axios.delete('/producto/categoria/'+id)
          .then(function (response) {
            // handle success
            console.log(response.data);



          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            that.getCategories();
          });


      },




      crear(item){
        let that = this


        if (this.texto_boton_dialog == 'Crear') {
          let data = {
          'nombre': this.nombre_categoria,
          'descripcion':  this.descripcion_categoria
          }


          this.axios.post('/producto/categoria', data)
            .then(function (response) {
              // handle success
              console.log(response.data);
              if (response.data.id != null) {
                that.categorias.push(response.data)

              }


            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .finally(function () {
              that.getCategories();
              that.dialog= false;
            });

        }else{
            let data = {
              'id': this.id_categoria,
              'nombre': this.nombre_categoria,
              'descripcion':  this.descripcion_categoria
            }

            this.axios.put('/producto/categoria', data)
            .then(function (response) {
              // handle success
              console.log(response.data);
              if (response.data.id != null) {
                that.categorias.push(response.data)

              }


            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .finally(function () {
              that.getCategories();
              that.dialog= false;
            });

        }

      },



      saveProduct(){
        this.dialog_product = false

      },
      submit(){

      },
      crearVentaProducto(){

      },
      LlenarRegistro(item){

      },

      agregarProductoFactura(){

        this.factura.push(this.venta)
        this.venta={
            producto_id: '',
            producto_nombre: '',
            producto_precio: 0,
            cantidad: 0,
            total: 0
            }

      }
    },

    beforeMount() {
      this.getCategories();

    },
    computed: {

      // totalVentas:function () {
      //   let total = 0;
      //   this.ventas.forEach(element => {
      //     total += element.total
      //   })
      //   return total

      // }
    }
  };
  </script>
