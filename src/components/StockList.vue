<template>



<v-card>
  <v-toolbar color="white" density="compact">


    <v-toolbar-title>
      STOCK

      <v-btn
        class="ma-2"
        color="indigo"
        icon="mdi-reload"
        @click="reload()"
      ></v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn variant="flat"
      color="green" dark  size="small"  to="/stock-new" >
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
            <v-icon size="small" color="red" @click="eliminarStock(item)">mdi-delete</v-icon>

          </td>
        </tr>
      </tbody>
    </v-table>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="auto"
      >


        <v-card width="400">
          <v-card-title primary-title>
           {{ accion }}
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="12">

                 <h3>{{producto.producto}}</h3>
              </v-col>

            </v-row>

            <v-row>

              <v-col>
                <v-text-field
                  readonly
                  solo
                  name=""
                  label="Ultima actualizacion"
                  v-model="producto.fecha_creacion"
                ></v-text-field>
                <v-text-field
                  readonly
                  solo
                  name="cantidad_actual"
                  label="Cantidad Actual"
                  v-model="producto.cantidad"
                ></v-text-field>

                <v-text-field
                name="cantidad"
                label="Cantidad Nueva"
                v-model="producto.cantidadNueva"
                ></v-text-field>
              </v-col>
            </v-row>

          </v-card-text>
          <v-card-actions>
            <v-btn color="primary"  @click="dialog = false">Cancelar</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary"  @click="actualizarStock(producto)">Actualizar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

  </v-card>


</template>
<script >
  import Swal from 'sweetalert2'
  // import DefaultView from './View.vue';
  export default {
  data: () => ({
    dialog_product: false,
    dialog: false,
    drawer: false,
    group: null,

    categorias: ["Bebidas", "Paquetes", "Alimentos", "Dulces", "Cigarros"],
    stock: [],
    producto : [],
    accion : ''


  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods:{
    reload(){
      console.log("re");
      this.stock =[]
      this.getStock()
    },

    eliminarStock(stock){
      let that =this;

      this.axios.delete('/producto/stock/'+stock.id)
        .then(function (response) {
          console.log(response.data);
          that.reload();

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          that.dialog = false;
        });



    },
    actualizarStock(stock){
      let that =this;

      console.log(stock.id);
      console.log(stock.cantidad);
      console.log(stock.cantidadNueva);

      let datas = {
        "id": stock.id,
        "cantidad": stock.cantidadNueva
      }

      this.axios.put('/producto/stock/'+stock.id, datas)
        .then(function (response) {
          console.log(response.data);
          that.reload();

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          that.dialog = false;
        });



    },
    getStock(){
      // console.log("stock");
      // console.log(this.stock);
      // console.log("stock nuevo");
      // this.stock = []
      // console.log(this.stock);
      let that =this;


      this.axios.get('/producto/stock/')
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


    },

    editar(item){
      console.log("editando")
      console.log(item)
      this.accion = 'Editar Producto'
      this.producto = item;
      this.dialog = true

    },

    nuevo(){
      this.accion = 'Nuevo Producto'

      this.dialog = true
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
