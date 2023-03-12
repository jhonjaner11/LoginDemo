<template>

<v-container grid-list-xs>


  <v-card>
    <v-card-title primary-title>
      Factura N {{parametro}}
    </v-card-title>

    <v-table density="compact">
      <thead>
        <tr  to="login">
          <th class="text-left">
            Id
          </th>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Cantidad
          </th>
          <th class="text-left">
            Costo Unidad
          </th>
          <th class="text-left">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <a href=""></a>
        <tr
          v-for="item in ventas"
          :key="item.id"

        >
          <td>{{ item.id }}</td>
          <td>{{ item.producto }}</td>
          <td>{{ item.cantidad }}</td>
          <td>{{ item.precio_unidad }}</td>
          <td>{{ item.precio_final }}</td>
        </tr>
      </tbody>
    </v-table>

    <v-card-text class="text-right text-h6">
      Total: ${{ totalVentas}}
    </v-card-text>
  </v-card>


</v-container>
</template>
<script >
  // import DefaultView from './View.vue';
  export default {
  name: 'VentaDetalle',
  props: ['factura_id'],
  data: () => ({
    drawer: false,
    group: null,
    arepe:'login',
    ventas: [],
    //factura_id:''


  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  mounted() {

    this.getVentaDetail(this.parametro);
  },

  methods:{
    getVentaDetail(factura_id){
      let that =this;
      console.log("factura"+ factura_id);
      this.axios.get('/ventas/list/'+factura_id)
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
    parametro(){
      return this.$route.query.item
    },

    totalVentas:function () {
      let total = 0;
      this.ventas.forEach(element => {
        total += element.precio_final
      })
      return total

    }
  }
};
</script>
