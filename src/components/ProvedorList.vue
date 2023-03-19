<template>



<v-card>
  <v-toolbar color="white" density="compact">


    <v-toolbar-title>Provedor</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn variant="flat"
      color="green" dark  size="small" to="/provedor-new" >
        New
    </v-btn>




  </v-toolbar>




    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">
            Id
          </th>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Tipo ID
          </th>
          <th class="text-left">
            Identificacion
          </th>
          <th class="text-left">
            Telefono
          </th>
          <th class="text-left">
            Direccion
          </th>
          <th class="text-left">
            Correo
          </th>
          <th class="text-left">
            Accion
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in provedores"
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.tipo_id }}</td>
          <td>{{ item.provedor_id }}</td>

          <td>{{ item.telefono }}</td>
          <td>{{ item.direccion }}</td>
          <td>{{ item.correo }}</td>
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
    provedores: [],



  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods:{
    getProvedores(){
      let that =this;

      this.axios.get('/provedor/list')
        .then(function (response) {
          // handle success
          response.data.forEach(element => {
            that.provedores.push(element)
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
    this.getProvedores();

    // <div id="app" data-fizz="buzz"></div>
  },
};
</script>
