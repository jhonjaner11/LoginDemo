<template>



<v-card>
  <v-toolbar color="white" density="compact">


    <v-toolbar-title>Productos</v-toolbar-title>

    <v-spacer></v-spacer>


    <v-row justify="space-around">

      <v-col cols="auto">
        <v-dialog
          transition="dialog-top-transition"
          width="auto"
          v-model="dialog_product"
          scrollable
        >
          <template v-slot:activator="{ props }">

            <v-btn variant="flat"
              color="green" dark  size="small"  v-bind="props">
                New
            </v-btn>
          </template>

          <template v-slot:default="{ dialog_product }">
            <v-card min-width=300>
              <v-toolbar
                color="primary"
                title="Nuevo Producto"
                dense
              ></v-toolbar>
              <v-card-text>
              <v-text-field
                name="name"
                label="Nombre"
                id="id"
              ></v-text-field>
              <v-text-field
                name="precio"
                label="Precio"
                id="id"
              ></v-text-field>
              <v-text-field
                name="provedor"
                label="Provedor"
                id="id"
              ></v-text-field>

              </v-card-text>
              <v-card-actions class="justify-end">

                <v-btn
                  color="success"
                  v-on:click="saveProduct"
                >save</v-btn>
                <v-btn
                  variant="text"
                  v-on:click="this.dialog_product = false"
                >Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>

    <v-btn color="success" variant="flat"
     dark  size="small" to="/product-new" >NUEVO</v-btn>

  </v-toolbar>


  <v-card-text>
   <v-autocomplete
   label="Categoria"
   :items="categorias"
   chips
   multiple
   clearable

   >

   </v-autocomplete>
   <v-text-field
    name="name"
    label="Nombre"
    id="id"
   ></v-text-field>
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
      {id:1, nombre: "Empanadas", precio: "2700", stock:20 , categoria:["Alimentos"],provedor:'Do??a Gloria'},
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

      console.log("Obteniendo");
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
    console.log('hola');
    this.getProducts();

    // <div id="app" data-fizz="buzz"></div>
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
