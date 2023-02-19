<template>

  <v-container grid-list-xs>
<v-card>
  <v-toolbar
      flat
      color="blue-grey"
      dark
    >
      <v-toolbar-title>  Registrar Venta</v-toolbar-title>
    </v-toolbar>
    <v-container grid-list-xs>

    </v-container>
    <v-card-text>
      <v-container>
        <v-row >
          <v-col cols="12" sm="12" xs="12" md="12" lg="4">
              <v-autocomplete
              label="Producto"
              :items=products
              item-title="name"
              v-model="producto_registro"
              return-object
              clearable
            >
              <template v-slot:item="{ props, item }">
                <v-list-item
                  v-bind="props"
                  :prepend-avatar="item?.raw?.avatar"
                  :title="item?.raw?.name"
                  :subtitle="item?.raw?.precio"

                ></v-list-item>
              </template>
            </v-autocomplete>
          </v-col>

          <v-col cols="5" sm="4" xs="4" md="12" lg="4">
            <v-text-field
            label="Cantidad"
            :model-value="range[0]"
            :rules="[() => !!venta.cantidad || 'This field is required']"
            v-model="venta.cantidad"
            ref="venta.cantidad"
            min=1
            type="number"

            ></v-text-field>
          </v-col>

          <v-col  cols="7" sm="12" xs="12" md="4" lg="4">
            <v-text-field
            :label="labelCantidadTotal"
            readonly
            v-model="venta.total"
            :value=precioProductoTotal
            ref="venta.cantidad"

            > </v-text-field>
          </v-col>

          <v-col cols="12" sm="12" xs="12" md="4" lg="4">
            <v-btn color="success" :onclick="agregarProductoFactura">Agregar</v-btn>
          </v-col>
        </v-row>
      </v-container>


    </v-card-text>




<v-table >
  <thead>
    <tr>
      <th class="text-left">
        Nombre
      </th>
      <th class="text-left">
        Cant
      </th>
      <th class="text-left">
        Precio U.
      </th>
      <th class="text-left">
        Total
      </th>
    </tr>
  </thead>
  <tbody>
    <tr
      v-for="item in factura"
      :key="item.producto_nombre"
    >
      <td>{{ item.producto_nombre }}</td>
      <td>{{ item.cantidad }}</td>
      <td>{{ item.producto_precio }}</td>
      <td>
        {{ item.total }}
        <v-icon size="small" icon="mdi-pencil"></v-icon>
        <v-icon size="small"  color="red" icon="mdi-delete"></v-icon>
      </td>

    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>Total</td>
      <td>{{totalFactura}}</td>
    </tr>
  </tbody>
</v-table>
<v-card-actions>

  <v-btn
    color="success"
    prepend-icon="mdi-archive"
    variant="tonal"
    class="mx-auto">Registrar</v-btn>
</v-card-actions>

</v-card>


</v-container>






</template>
<script >
  // import DefaultView from './View.vue';
  export default {
  data: () => ({
    drawer: false,
    group: null,
    products: [
      {
        id:1,
        name: 'Empanada de pollo',
        precio: 3000
      },
      {
        id:2,
        name: 'papas',
        precio: 2700
      },
      {
        id:3,
        name: 'Coca cola',
        precio: 2000
      },
    ],
    producto_registro: '',
    // producto_registro:{
    //   id:'',
    //   nombre:'',
    //   precio:''
    // },

    venta:{
          producto_id: '',
          producto_nombre: '',
          producto_precio: 0,
          cantidad: 0,
          total: 0
          },

    factura : [],

    range: [1, 100],
    Cantidad: '',

    itemsPerPage: 10,
    headers: [
          {
            title: 'Nombre',
            align: 'start',
            sortable: false,
            key: 'producto_nombre',
          },
          { title: 'Cantidad', align: 'end', key: 'cantidad' },
          { title: 'Precio Unidad', align: 'end', key: 'producto_precio' },
          { title: 'Total', align: 'end', key: 'total' },

    ],
    // totalFactura:0

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
    labelCantidadTotal: function(){
      if(this.producto_registro.precio)
        return "Precio unidad: $"+this.producto_registro.precio
      else
        return ""
    },
    // a computed getter
    precioProductoTotal: function () {

      this.venta.cantidad=  parseInt(this.venta.cantidad)
      let total = parseInt(this.producto_registro.precio) * parseInt(this.venta.cantidad)
      this.venta.total = total
      this.venta.producto_precio = this.producto_registro.precio
      this.venta.producto_id = this.producto_registro.id
      this.venta.producto_nombre = this.producto_registro.name


      // `this` points to the vm instance


      return total
    },

    totalFactura:function () {
      let total = 0;
      this.factura.forEach(element => {
        total += element.total
      })
      return total

    }
  }
};
</script>
