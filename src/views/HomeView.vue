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
                $ 25.000
              </v-col>

              <!-- <v-col cols="6" class="text-right">
                <v-icon
                  color="error"
                  icon="mdi-weather-hurricane"
                  size="88"
                ></v-icon>
              </v-col> -->
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

      <v-col cols="12" md="6"   >
        <v-card dark color="green-lighten-2"  class="ma-1 mx-auto">
          <v-card-title text-color="white" class="text-color white" >
            Reporte Semanal
          </v-card-title>
        <ChartFewDetail />
        </v-card>
      </v-col>

    </v-row>

  <v-row >

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


  methods:{
    verDetalle(){
      console.log("hola");
      router.push("/sales")
    }
  },
  components: {
    ChartFewDetail
  },
};



</script>
