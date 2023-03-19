<template>


<v-container grid-list-xs>


<v-card max-width="500" class="mx-auto" >

  <v-card-title primary-title>
    <v-btn flat icon color="primary" size="sm"
    to="/provedor-list">
      <v-icon btn>mdi-arrow-left</v-icon>
    </v-btn>


    Provedor Nuevo
  </v-card-title>


  <v-card-text>

   <v-text-field
    name="name"
    label="Nombre"
    id="id"
    v-model="nombre"
   ></v-text-field>




  <v-select
    label="Tipo ID"
    :items="tipos_identificacion"
    item-title="name"
    item-value="id"
    v-model="tipo_id"
  ></v-select>

  <v-text-field

    name="provedor_id"
    label="Identificacion"
    v-model="provedor_id"
  ></v-text-field>

  <v-text-field
    name="telefono"
    label="Telefono"
    v-model="telefono"
  ></v-text-field>

  <v-text-field
    name="direccion"
    label="Direccion"
    v-model="direccion"
  ></v-text-field>

  <v-text-field
    name="correo"
    label="Correo"
    v-model="correo"
  ></v-text-field>

  <v-text-field
    name="pagina_web"
    label="Pagina Web"
    v-model="pagina_web"
  ></v-text-field>

  </v-card-text>

  <v-card-actions>
    <v-btn color="red" variant="flat" to="/provedor-list"
    dark  >Cancel</v-btn>
    <v-spacer></v-spacer>
    <v-btn color="success" dark
    @click="crearProvedor()"
    >Crear</v-btn>
  </v-card-actions>




  </v-card>

</v-container>
</template>
<script >
  //import axios from 'axios';
  // import DefaultView from './View.vue';
  import Swal from 'sweetalert2'
  import router from "@/router/index";

  export default {
  data: () => ({
    dialog_product: false,
    drawer: false,
    group: null,

    productos: [],
    provedores:[],
    categorias: [],

    tipos_identificacion:[{id:0, name: 'Cedula'},{id:1,name:'RUT'}],

    nombre: '',
    tipo_id : '',
    provedor_id:'',
    telefono:'',
    direccion : '',
    correo : [],
    pagina_web: '',



  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods:{

    getProducts(){
      let that =this;

      this.axios.get('/producto/list')
        .then(function (response) {
          // handle success
          response.data.forEach(element => {
            that.productos.push(element)
            console.log(element);
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

    getProvedores(){
      let that =this;

      this.axios.get('/provedor/list')
        .then(function (response) {
          // handle success
          response.data.forEach(element => {
            that.provedores.push(element)

          });

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

      console.log("Obteniendo");
    },

    getCategorias(){
      let that =this;

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

      console.log("Obteniendo");
    },

    crearProvedor(){
      let data= {
        "nombre": this.nombre,
        "tipo_id": this.tipo_id,
        "provedor_id": this.provedor_id,
        "telefono": this.telefono,
        "direccion": this.direccion,
        "correo": this.correo,
        "pagina_web": this.pagina_web,
      }


      Swal.fire({
        title: 'Desea crear el provedor?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Registrar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios.post('/provedor/list', data)
        .then(function (response) {
          Swal.fire(
            'Provedor creado!',
          )


        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          router.push('/provedor-list')
        });

        }
      })


      console.log(data);
    },

    saveProduct(){
      this.dialog_product = false
      console.log("guardado");
    },
    submit(){
      console.log(this.venta)
    },
    crearVentaProducto(){
      console.log("CON")
      console.log(producto_registro)
    },
    LlenarRegistro(item){
      console.log("LlenaR")
      console.log(item);
      console.log(this.producto_registro)
    },

    agregarProductoFactura(){
      console.log("agregando:")
      console.log(this.venta);
      this.factura.push(this.venta)
      this.venta={
          producto_id: '',
          producto_nombre: '',
          producto_precio: 0,
          cantidad: 0,
          total: 0
          },

      console.log(this.factura);
    }
  },

  beforeMount() {

    this.getProvedores();
    this.getCategorias();

    // <div id="app" data-fizz="buzz"></div>
  },
  computed: {
    categoriaIds() {
      console.log();
      return this.categoria.filter((cat) => cat != null).map((cat) => cat);
    },
  },
};
</script>
