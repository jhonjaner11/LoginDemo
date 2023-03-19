<template>



<v-card>
  <v-toolbar color="white" density="compact">


    <v-toolbar-title>STOCK</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn variant="flat"
      color="green" dark  size="small" to="/stock-new" >
        New
    </v-btn>




  </v-toolbar>




    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            Fecha
          </th>

          <th class="text-left">
            Producto
          </th>
          <th class="text-left">
            Cantidad
          </th>

          <th class="text-left">
            Accion
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in stock"
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.fecha_creacion }}</td>
          <td>{{ item.producto }}</td>
          <td>{{ item.cantidad }}</td>



          <td>
            <v-icon size="small" color="primary" v-on:click="editar(item)">mdi-pencil</v-icon>
            <v-icon size="small" color="red">mdi-delete</v-icon>

          </td>
        </tr>
      </tbody>
    </v-table>


  </v-card>


</template>
<script >
  // import DefaultView from './View.vue';
  export default {
  data: () => ({
    dialog_product: false,
    drawer: false,
    group: null,

    categorias: ["Bebidas", "Paquetes", "Alimentos", "Dulces", "Cigarros"],
    stock: [],



  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods:{
    getStock(){
      let that =this;

      this.axios.get('/producto/stock')
        .then(function (response) {
          // handle success
          response.data.forEach(element => {
            that.stock.push(element)
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

    editar(item){
      console.log("editando")
      console.log(item.id);
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
  computed: {

    // totalVentas:function () {
    //   let total = 0;
    //   this.ventas.forEach(element => {
    //     total += element.total
    //   })
    //   return total

    // }
  },

  beforeMount() {
    console.log('hola');
    this.getStock();

    // <div id="app" data-fizz="buzz"></div>
  },
};
</script>
