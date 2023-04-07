<template>



<v-card>
  <v-toolbar color="white" density="compact">


    <v-toolbar-title>
      Entregas

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
          <th>
            Estado
          </th>
          <th class="text-left">
            Fecha
          </th>
          <th class="text-left">
            Periodicidad
          </th>

          <th class="text-left">
            Provedor
          </th>
          <th class="text-left">
            Contacto
          </th>
          <th class="text-left">
            Productos
          </th>
          <th class="text-left">
            Observaciones
          </th>

          <th class="text-left">
            Accion
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in deliverys"
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>
            
            <v-chip
      
      :color="getColor(item.finalizado)"
      
    >
    {{ getEstado(item.finalizado) }}
    </v-chip>
    </td>
          <td>{{ item.fecha }}</td>
          <td>{{ item.periodo }}</td>
          <td>{{ item.provedor }}</td>
          <td>{{ item.telefono }}</td>
          
          <td>
            <v-icon size="small" color="primary" v-on:click="verProducto(item)">mdi-cart-arrow-up</v-icon>
            
          </td>
          <td>{{ item.comentario }}</td>


          <td>
            <v-icon size="small" color="success" @click="confirmarEntrega(item)">mdi-check</v-icon>
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
<!-- DIALOG PRODUCTOS -->
    <div class="text-center">
      <v-dialog
        v-model="dialog_productos"
        width="auto"
      >


        <v-card width="400">
          <v-card-title primary-title>
           Productos
          </v-card-title>
          <v-card-text>
            
            <v-list lines="one">
            <v-list-item
              v-for="item,ti   in productos"
              :key="item.title"
              :title="ti"
             
            >
            
            <v-text-field :key="item.title"  dense >{{ item }}</v-text-field>
            <template v-slot:append>
              
              <v-icon icon="mdi-delete" color="red" @click = "eliminarProducto(item,ti)"></v-icon>
            </template>
            </v-list-item>
          </v-list>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary"  @click="dialog_productos = false">Cancelar</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success"  @click="saveProducto()">Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!-- dialog confirmar entrega -->
    <div class="text-center">
      <v-dialog
        v-model="dialog_entrega"
        width="auto"
      >


        <v-card width="400">
          <v-card-title primary-title>
           Confirmar Entrega
          </v-card-title>
          <v-card-text>
            Provedor: {{ entrega.provedor }}
            <br><br>

            Productos: <br>
            <v-list lines="one">
            <v-list-item
              v-for="item,ti   in entrega.productos"
              :key="item.title"
              :title="ti"
              :subtitle="item"
            >
          </v-list-item>
          </v-list>
          
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary"  @click="dialog_entrega = false">Cancelar</v-btn>
            
            <v-spacer></v-spacer>
            <v-btn color="success"  @click="dialog_entrega = false">Confirmar <br>Entrega</v-btn>
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
    dialog_productos: false,
    dialog_entrega: false,
    dialog: false,
    drawer: false,
    group: null,

    categorias: ["Bebidas", "Paquetes", "Alimentos", "Dulces", "Cigarros"],
    deliverys: [],
    producto : [],
    accion : '',
    productos : null,
    entrega : null,


  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods:{
    eliminarProducto(item, ti){


      console.log(item, ti);
      console.log(Object.values(this.productos));
      console.log(Object.keys(this.productos));
      console.log("ti:");
      console.log(this.productos[ti]);
      console.log(delete this.productos[ti]);
      console.log("eliminado");
      console.log(this.productos);
     
    },
    saveProducto(){


      console.log(this.productos);
      console.log(Object.values(this.productos));
      console.log(Object.keys(this.productos));

      // const res = this.productos.find(({ item }))
      if (Object.keys(this.productos).includes(ti)) {
        console.log("el res es: "+this.productos[ti]);
      }
      console.log("janer" );
      // console.log(this.productos.objects());


    },
 
    getEstado(estado){
      if (estado) {
        return "Finalizado"
      }else{
        return "Pendiente"
      }
      
    },
    getColor(estado){
      if (estado) {
        return "green"
      }else{
        return "orange"
      }
    },
    reload(){
      console.log("re");
      this.deliverys =[]
      this.getDelivery()
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
    getDelivery(){
     
      let that =this;


      this.axios.get('/provedor/entregas/')
        .then(function (response) {
          // handle success

          response.data.forEach(element => {
            that.deliverys.push(element)
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

    confirmarEntrega(item){
      this.entrega = item
      this.dialog_entrega =true;
    },

    verProducto(item){
      console.log("Producto")
      console.log(item)
      this.productos = item.productos
      
      this.dialog_productos = true

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
    this.getDelivery();

    // <div id="app" data-fizz="buzz"></div>
  },
};
</script>
