<template>
  <v-container >
    <h1>Reporte</h1>
    <v-row>
      <v-col cols="6">
        <ChartComponent/>
      </v-col>
      <v-col>
        <ChartComponent/>
        </v-col>
        <v-col>
          hola
          </v-col>
    </v-row>




  </v-container>

</template>

<script >

  import  ChartComponent  from '../components/charts/ChartComponent.vue';

  export default {
  data: () => ({
    drawer: false,
    group: null,

    datas :{

      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 39, 10, 40, 39, 80, 40]
        }
      ],
    },
    options : {
      responsive: true,
      maintainAspectRatio: false
    }


  }),

  components:{
    ChartComponent

  },
  }
</script>
