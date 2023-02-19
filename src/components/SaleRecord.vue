<template>

<v-card>
  <v-toolbar
      flat
      color="blue-grey"
      dark
    >
      <v-toolbar-title>  Registrar Venta</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-container grid-list-xs>
        <v-row>
          <v-col cols="4">
              <v-autocomplete
              label="Producto"
              :items=products

              item-title="name"


              v-model="producto_registro"
              return-object
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
          <v-col  cols="2">
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

          <v-col  cols="3">
            <v-text-field
            :label="labelCantidadTotal"
            readonly
            v-model="venta.total"
            :value = precioProductoTotal
            ref="venta.cantidad"

            > </v-text-field>
          </v-col>

          <v-col  cols="3">
            <v-btn color="success" :onclick="agregarProductoFactura">Agregar</v-btn>
          </v-col>
        </v-row>
      </v-container>


    </v-card-text>



</v-card>






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
    producto_registro: {},
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
    Cantidad: '2123'

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
      return "Precio unidad: $"+this.producto_registro.precio
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
    }
  }
};
</script>
