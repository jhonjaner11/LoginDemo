<template>



<v-card>
  <v-card-title primary-title>
    Facturas
  </v-card-title>



    <v-table density="compact">
      <thead>
        <tr  >
          <th class="text-left">
            Id
          </th>
          <th class="text-left">
            Fecha
          </th>
          <th class="text-left">
            Usuario
          </th>
          <th class="text-left">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in ventas"
          :key="item.id"
          v-on:click="venta_detalle(item.id)"
        >

          <td>{{ item.id }}</td>

          <td>{{ item.fecha }}</td>
          <td>{{ item.user }}</td>
          <td>$ {{ item.total }}</td>


      </tr>
      </tbody>
    </v-table>

    <v-card-text class="text-right text-h6">
      Total: ${{ totalVentas}}
    </v-card-text>
  </v-card>


</template>
<script >
  // import DefaultView from './View.vue';
  export default {
  data: () => ({
    drawer: false,
    group: null,
    ventas: [

        ],


  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods:{
    getFacturas(){
      let that =this;

      this.axios.get('/ventas/facturas')
        .then(function (response) {
          // handle success
          response.data.forEach(element => {
            that.ventas.push(element)
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
    venta_detalle(item_id){
      console.log("item: " + item_id);

      this.$router.push({
        name: 'VentaDetalle',

        query:{item:item_id}})
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

    totalVentas:function () {
      let total = 0;
      this.ventas.forEach(element => {
        total += element.total
      })
      return total

    }
  },
  beforeMount() {
    console.log('hola');
    this.getFacturas();

    // <div id="app" data-fizz="buzz"></div>
  },
};
</script>
