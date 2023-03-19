<template>


<v-container grid-list-xs>


<v-card max-width="500" class="mx-auto" >

  <v-card-title primary-title>
    <v-btn flat icon color="primary" size="sm"
    to="/stock-list">
      <v-icon btn>mdi-arrow-left</v-icon>
    </v-btn>


    Stock Nuevo
  </v-card-title>


  <v-card-text>

  <v-autocomplete
   label="Producto"
   :items="productos"
   item-title="nombre"
    item-value="id"
    v-model="producto"
  ></v-autocomplete>


  <v-text-field
    name="cantidad"
    label="Cantidad"
    v-model="cantidad"
  ></v-text-field>

  </v-card-text>

  <v-card-actions>
    <v-btn color="red" variant="flat"
    dark  >Cancel</v-btn>
    <v-spacer></v-spacer>
    <v-btn color="success" dark
    @click="crearProducto()"
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

    nombre: '',
    provedor : '',
    precio_compra:'',
    precio_venta:'',
    activo : true,
    categoria : [],
    cantidad: '',



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

    crearProducto(){
      let data= {
      "nombre": this.nombre,
      "provedor": this.provedor,
      "precio_venta": this.precio_venta,
      "precio_compra": this.precio_compra,
      "activo": true,
      "categoria": this.categoriaIds
      }


      Swal.fire({
        title: 'Desea crear el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Registrar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios.post('/producto/list', data)
        .then(function (response) {
          Swal.fire(
            'Producto creado!',
          )
          router.push('/product-list')

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
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

    this.getProducts();


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
