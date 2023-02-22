<template>

<v-container grid-list-xs>


  <v-card>
    <v-card-title primary-title>
      Factura N {{numero_factura }}
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
          <td>{{ item.nombre }}</td>
          <td>{{ item.cantidad }}</td>
          <td>{{ item.costo }}</td>
          <td>{{ item.total }}</td>
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
  data: () => ({
    drawer: false,
    group: null,
    numero_factura : 1,
    arepe:'login',
    ventas: [
          {
            id: 1,
            nombre: 'Arepa',
            cantidad: 1,
            costo: 1500,
            total: 1500
          },
          {
            id: 2,
            nombre: 'Empanada de pollo',
            cantidad: 5,
            costo: 2000,
            total: 10000
          },


        ],


  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods:{

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
  }
};
</script>
