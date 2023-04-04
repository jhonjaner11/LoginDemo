<template>



<v-card>
  <v-toolbar color="white" density="compact">


    <v-toolbar-title>Productos</v-toolbar-title>

    <v-spacer></v-spacer>




    <v-btn color="success" variant="flat"
     dark  size="small" to="/product-new" >NUEVO</v-btn>

  </v-toolbar>


  <v-card-text>
    <v-row>
      <v-col colr="6">
        <v-text-field
        name="name"
        label="Nombre"
        id="id"
       ></v-text-field>
      </v-col>
      <v-col cols="6">

        <v-autocomplete
        label="Categoria"
        :items="categorias"
        chips
        multiple
        clearable

        >

        </v-autocomplete>

      </v-col>

    </v-row>


  </v-card-text>



    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">
            Id
          </th>
          <th class="text-left">
            Producto
          </th>
          <th class="text-left">
            Provedor
          </th>

          <th class="text-left">
            Valor Venta
          </th>



        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in productos"
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.provedor }}</td>
          <td>${{ item.precio_venta }}</td>

        </tr>
      </tbody>
    </v-table>


  </v-card>


</template>
<script >
  //import axios from 'axios';
  // import DefaultView from './View.vue';
  export default {
  data: () => ({
    dialog_product: false,
    drawer: false,
    group: null,

    categorias: ["Bebidas", "Paquetes", "Alimentos", "Dulces", "Cigarros"],
    productos_old: [
      {id:1, nombre: "Empanadas", precio: "2700", stock:20 , categoria:["Alimentos"],provedor:'Doña Gloria'},
      {id:2, nombre: "Papas Limon", precio: "2700", stock:20, categoria:["Paquetes"],provedor:'Super' },
      {id:3, nombre: "Coca Cola pet", precio: "1500", stock:20, categoria:["Bebidas"],provedor:'Postobon'}
    ],
    productos: []



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
    this.getProducts();

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
