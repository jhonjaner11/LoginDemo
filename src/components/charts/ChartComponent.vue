<template>
  <!-- <Bar :data="data" :options="options" /> -->
  <Line :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement


} from 'chart.js'
import { Bar , Line} from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement )

export default {
  name: 'App',
  components: {
    Bar, Line
  },
  data() {
    return {
      data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [{
          data: [76000, 59000, 80000,45000,120000,60000,45000],
          label: 'Ventas Semanales',
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true
      }
    }
  }
}
</script>
