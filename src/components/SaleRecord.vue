<template>

  <v-container>
<v-card>
  <v-toolbar
      flat
      color="indigo-darken-4"
      dark density="compact"
      title="Registrar Venta"
    >

    </v-toolbar>


      <v-container>
        <v-row no-gutters>
          <v-col cols="12" sm="12" xs="12" md="4" lg="4">
              <v-autocomplete
              label="Producto"
              :items=products
              item-title="producto"
              v-model="producto_registro"
              return-object
              clearable
            >
              <template v-slot:item="{ props, item }">
                <v-list-item
                  v-bind="props"
                  :prepend-avatar="item?.raw?.avatar"
                  :title="item?.raw?.producto"
                  :subtitle="item?.raw?.precio_producto"

                ></v-list-item>
              </template>
            </v-autocomplete>
          </v-col>

          <v-col cols="5" sm="4" xs="4" md="12" lg="4">
            <v-text-field
            label="Cantidad"
            :model-value="range[0]"
            :rules="[() => !!venta.cantidad  || 'This field is resquired', () => venta.cantidad <= producto_registro.cantidad || 'No hay Stock']"
            v-model="venta.cantidad"
            ref="venta.cantidad"
            min=1
            type="number"
            max=10

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
          <v-col>Cantidad Maxima del Producto: {{producto_registro.cantidad}}</v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" xs="12" md="4" lg="4">
            <v-btn color="success" :onclick="agregarProductoFactura">Agregar</v-btn>
          </v-col>
        </v-row>
      </v-container>







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
        <v-icon size="small"  color="red" icon="mdi-delete"
        @click="eliminarProducto(item)"></v-icon>
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
    class="mx-auto"
    :onclick="registrarFactura"
    >Registrar</v-btn>
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
    products: [],
    producto_registro: '',
    cantidadMaxima: 0,
    // producto_registro:{
    //   id:'',
    //   nombre:'',
    //   precio:''
    // },

    venta:{
          producto_id: '',
          producto_nombre: '',
          producto_precio: '',
          cantidad: '',
          total: ''
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

  beforeMount() {
    this.getProducts();
  },

  methods:{
    registrarFactura(){
      let that = this;
      let facturaNew = {
        "usuario": 1,
        "total": this.totalFactura,
        "descuento":0,
        "ventas": this.factura
      }
      this.axios.post('/ventas/facturas', facturaNew)
        .then(function (response) {
          // handle success
          that.factura = []

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          that.factura = []
        });
    },
    getProducts(){
      let that =this;

      this.axios.get('/producto/stock/')
        .then(function (response) {
          // handle success
          response.data.forEach(element => {
            if (element.cantidad>0) {
               that.products.push(element)
            }

            // console.log(element);
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
      let repetido = false

      if ((this.venta.cantidad>0) && (this.venta.cantidad<=this.producto_registro.cantidad)){

        this.factura.forEach(element => {

          if (element.producto_id ==this.venta.producto_id) {

            element.cantidad += this.venta.cantidad
            element.total =  element.cantidad * element.producto_precio
            repetido = true
          }


        });



        if (!repetido){
          this.factura.push(this.venta)
        }

        this.venta={
              producto_id: '',
              producto_nombre: '',
              producto_precio: '',
              cantidad: '',
              total: ''
              },
          this.producto_registro=''

      }
    },

    eliminarProducto(item){
      console.log("eliminar");

      this.factura.splice(this.factura.indexOf(item), 1)
    },
  },
  computed: {
    labelCantidadTotal: function(){
      let precio
      if(this.producto_registro.precio_producto)
        precio = this.producto_registro.precio_producto
      else
        precio =  0

      return  "Precio unidad: $"+precio
    },
    // a computed getter
    precioProductoTotal: function () {

      this.venta.cantidad=  parseInt(this.venta.cantidad)
      let total = parseInt(this.producto_registro.precio_producto) * parseInt(this.venta.cantidad)
      this.venta.total = total
      this.venta.producto_precio = this.producto_registro.precio_producto
      this.venta.producto_id = this.producto_registro.id_producto
      this.venta.producto_nombre = this.producto_registro.producto

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
