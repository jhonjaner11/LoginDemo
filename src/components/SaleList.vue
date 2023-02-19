<template>



<v-card>
  <v-card-title primary-title>
    Ventas
  </v-card-title>



    <v-table density="compact">
      <thead>
        <tr>
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
        >
          <td>{{ item.id }}</td>
          <td>{{ item.fecha }}</td>
          <td>{{ item.usuario }}</td>
          <td>{{ item.total }}</td>
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
          {
            id: '1',
            fecha: '19-02-2023 12:23',
            usuario: 'Allison',
            total: 12000
          },
          {
            id: '2',
            fecha: '19-02-2023 12:25',
            usuario: 'Allison',
            total: 2000
          },
          {
            id: '3',
            fecha: '19-02-2023 14:23',
            usuario: 'Azdy',
            total: 4300
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
