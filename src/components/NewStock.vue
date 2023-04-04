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

    :onchange="getCantidadProducto(producto)"

  ></v-autocomplete>

  <v-row>
    <v-col cols="6">
      <v-text-field
        disabled
        name="cantidad_actual"
        label="Cantidad Actual"
        v-model="cantidad_actual"
      ></v-text-field>
    </v-col>
    <!-- #TODO -->
    <!-- <v-col cols="2" >

      <v-icon size="x-large" right>mdi-arrow-right-bold</v-icon>
      <v-btn
        class="ma-2"
        variant="text"
        icon="mmdi-arrow-right-bold"
        color="blue-lighten-2"
      ></v-btn>
    </v-col> -->
    <v-col cols="6">
      <v-text-field
      name="cantidad"
      label="Cantidad Nueva"
      v-model="cantidad"
      ></v-text-field>
    </v-col>
  </v-row>



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

    producto: '',

    nombre: '',
    provedor : '',
    precio_compra:'',
    precio_venta:'',
    activo : true,
    categoria : [],
    cantidad: '',
    cantidad_actual: '',
    nuevo: true,


  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods:{

    getCantidadProducto(id){
      let that =this;

      if (id) {


        this.axios.get('/producto/stock/'+ id)
          .then(function (response) {
            // handle success
            console.log(response.data);
            if (response.data!='') {
              console.log("entrando");
              that.cantidad_actual = response.data[0].cantidad,
              that.nuevo= false
            }else{
              that.cantidad_actual = 0
              that.nuevo= true
            }


          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
      }
    },

    getProducts(){
      let that =this;

      this.axios.get('/producto/list')
        .then(function (response) {
          // handle success
          response.data.forEach(element => {
            that.productos.push(element)

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



      let data = {
        "id_producto":this.producto,
        "cantidad": this.cantidad,
        "punto":1,
      }

      let producto_id = this.producto
      let nuevo_ = this.nuevo
      console.log("nuevo"+nuevo_);

      Swal.fire({
        title: 'Desea crear el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Registrar'
      }).then((result) => {
        if (result.isConfirmed) {

          if (nuevo_) {
            this.axios.post('/producto/stock/', data)
            .then(function (response) {
              Swal.fire(
                'Stock creado!',
              )
              router.push('/stock-list')

            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .finally(function () {
              // always executed
            });
          }else{
            this.axios.put('/producto/stock/'+producto_id, data)
            .then(function (response) {
              Swal.fire(
                'Producto modificado!',
              )
              router.push('/stock-list')

            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .finally(function () {
              // always executed
            });

          }


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
