<template>

  <v-container grid-list-xs>
    <v-row no-gutters>
      <v-col no-gutters cols="12" md="6"  class="">

        <v-card
          color="blue-lighten-1"
          class="ma-1"
        >
          <v-card-item :title="get_today">

          </v-card-item>

          <v-card-text class="py-0">
            <v-row align="center" no-gutters>
              <v-col
                class="text-h2"
                cols="12"
                @click="verDetalle"
              >
                {{ ventas_diaria }}
              </v-col>
            </v-row>
          </v-card-text>


          <div class="d-flex py-3 justify-space-between">
            <v-list-item
              density="compact"
              prepend-icon="mdi-weather-windy"
            >
              <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item
              density="compact"
              prepend-icon="mdi-weather-pouring"
            >
              <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>
          </div>

          <v-expand-transition>
            <div v-if="expand">
              <div class="py-2">
                <v-slider
                  v-model="time"
                  :max="6"
                  :step="1"
                  :ticks="labels"
                  class="mx-4"
                  color="primary"
                  density="compact"
                  hide-details
                  show-ticks="always"
                  thumb-size="10"
                ></v-slider>
              </div>

              <v-list class="bg-transparent">
                <v-list-item
                  v-for="item in forecast"
                  :key="item.day"
                  :title="item.day"
                  :append-icon="item.icon"
                  :subtitle="item.temp"
                >
                </v-list-item>
              </v-list>
            </div>
          </v-expand-transition>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn @click="expand = !expand">
              {{ !expand ? 'Ultimas Ventas' : 'esconder' }}
            </v-btn>
          </v-card-actions>
        </v-card>


      </v-col>

      <v-col no-gutters cols="12" md="3"  class="">

        <v-card
          color="indigo-darken-1"
          class="ma-1"
        >
          <v-card-item title="Ventas Semanal">

          </v-card-item>

          <v-card-text class="py-0">
            <v-row align="center" no-gutters>
              <v-col
                class="text-h4"
                cols="12"
                @click="verDetalle"
              >
                {{ ventas_semanal }}
              </v-col>
            </v-row>
          </v-card-text>


          <div class="d-flex py-3 justify-space-between">
            <v-list-item
              density="compact"
              prepend-icon="mdi-weather-windy"
            >
              <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item
              density="compact"
              prepend-icon="mdi-weather-pouring"
            >
              <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>
          </div>


        </v-card>


      </v-col>
      <v-col no-gutters cols="12" md="3"  class="">

        <v-card
          color="indigo-darken-4"
          class="ma-1"
        >
          <v-card-item title="Ventas Mensual">

          </v-card-item>

          <v-card-text class="py-0">
            <v-row align="center" no-gutters>
              <v-col
                class="text-h4"
                cols="12"
                @click="verDetalle"
              >
                {{ ventas_mensual }}
              </v-col>
            </v-row>
          </v-card-text>


          <div class="d-flex py-3 justify-space-between">
            <v-list-item
              density="compact"
              prepend-icon="mdi-weather-windy"
            >
              <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item
              density="compact"
              prepend-icon="mdi-weather-pouring"
            >
              <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>
          </div>


        </v-card>


      </v-col>
    </v-row>

    <v-row>

      <v-col cols="12" md="4"  >

              <v-card to="/stock-list">




                <v-card-text>
                  <div class="font-weight-bold ms-1 mb-2">
                    Today
                  </div>

                  <v-timeline density="compact" align="start">
                    <v-timeline-item
                      v-for="message in stock"
                      :key="message.id"
                      :dot-color="message.color"
                      size="x-small"
                    >

                        <div class="font-weight-normal">
                          <strong>{{ message.producto }}</strong> Cantidad: {{ message.cantidad }}
                        </div>
                        <div>{{ message.message }}</div>

                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>


      </v-col>

      <v-col  cols="12" md="4" >

        <v-card color="purple-darken-3" >




          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">
              Pedidos Proximos
            </div>

            <v-timeline density="compact" align="start">
              <v-timeline-item
                v-for="message in provedores"
                :key="message.id"
                :dot-color="message.color"
                size="x-small"
              >

                  <div class="font-weight-normal">
                    <strong>{{ message.nombre }}</strong>  {{ message.fecha }}
                  </div>
                  <div>{{ message.message }}</div>

              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>


</v-col>
    </v-row>


    <v-row  class="mx-auto" align-content="center" align="center" justify="center">
      <v-col cols="6" align-content="center" align="center"   >
          <v-btn  size="large" block stacked append-icon="mdi-package-variant-plus" to="product-list"> Agregar Producto
          </v-btn>
      </v-col>

      <v-spacer></v-spacer>
      <v-col cols="6" align-content="center" align="center" fluid>
        <div class="fill-height">
        <v-btn  size="large" stacked block append-icon="mdi-account-tie" color="success" to="provedor-list">
          Agregar  Provedor
        </v-btn>
      </div>
      </v-col>

      <v-spacer></v-spacer>
      <v-col cols="6" align-content="center" align="center" >
        <v-btn size="large" stacked block append-icon="mdi-cash-multiple" color="success"

        to="sale-record"
          >
          Registrar Venta
        </v-btn>
      </v-col>

      <v-spacer></v-spacer>
      <v-col cols="6" align-content="center" align="center"  fluid>



        <v-btn block  size="large" stacked append-icon="mdi-robot-confused" class="text-body-1"
        to="configuration">
        Configuracion
        </v-btn>

      </v-col>



    </v-row>

    <v-col cols="12" md="6"   >
      <v-card dark color="green-lighten-2"  class="ma-1 mx-auto">
        <v-card-title text-color="white" class="text-color white" >
          Reporte Semanal
        </v-card-title>
      <ChartFewDetail />
      </v-card>
    </v-col>
</v-container>



</template>

<script >
import ChartFewDetail from '@/components/charts/ChartFewDetail.vue'
import router from "../router/index";
export default {
  data() {
    return {

      labels: { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' },
      expand: false,
      time: 0,
      forecast: [
        { day: '11:55 am', icon: 'mdi-white-balance-sunny', temp: 'Empanada, Gaseosa, ...' },
        { day: '12:02 pm', icon: 'mdi-white-balance-sunny', temp: 'Empanada,...' },
        { day: '1:23 pm', icon: 'mdi-cloud', temp: 'Brownies Magicos,...' },
      ],

      meses : ["January","February","March","April","May","June","July","August","September","October","November","December"],
      ventas_diaria: '',
      ventas_semanal: '',
      ventas_mensual: '',

      stock : [],

      provedores : [
        { id: 1,
          nombre: 'Postobon',
          fecha: 'Jueves, 30 de Marzo',
          telefono: '310 231 2312'
        },
        { id: 2,
          nombre: 'Magola',
          fecha: 'Viernes, 31 de Marzo',
          telefono: '310 231 2312'
        },
        { id: 3,
          nombre: 'Janer',
          fecha: 'Sabado, 1 de Abril',
          telefono: '310 231 2312'
        }
      ]
    }
  },

  beforeMount() {

    this.getInformeGeneral();
    this.getInformeStock();
  },

  methods: {

    valorFormateado(numero) {
      if (!numero) {
        numero = 0
      }
      return numero.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
      });
    },
    getInformeStock(){
      let that =this;

      this.axios.get('/ventas/informe/stock/')
        .then(function (response) {
          // handle success
          console.log(response.data);
          that.stock = response.data
          // that.ventas_diaria= that.valorFormateado(response.data.diario[0])
          // that.ventas_semanal= that.valorFormateado(response.data.semanal[0])
          // that.ventas_mensual= that.valorFormateado(response.data.mensual[0])

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
    getInformeGeneral(){
      let that =this;

      this.axios.get('/ventas/informe/')
        .then(function (response) {
          // handle success
          console.log(response.data);
          that.ventas_diaria= that.valorFormateado(response.data.diario[0])
          that.ventas_semanal= that.valorFormateado(response.data.semanal[0])
          that.ventas_mensual= that.valorFormateado(response.data.mensual[0])

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

    verDetalle(){
      router.push("/sales")
    }
  },

  computed:{

    get_today: function () {
      let d = new Date()
      let day = d.getDate()
      let n_month =  d.getMonth();
      let mes = this.meses[n_month]
      return "Ventas hoy: "+ day + " / "+mes
      // `this` points to the vm instance

    }

  },

  components: {
    ChartFewDetail
  },


};



</script>
