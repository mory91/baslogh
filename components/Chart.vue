// just an example. A cleaner way is to wrap the showLine-stuff in a dedicated component
<template>
  <div>
    <my-chart v-if="showLine" :data="pieData" :options="options"></my-chart>
  </div>
</template>

<script>
  export default {
    name: 'Chart',
    data () {
      return {
        showLine: false,
        pieData: '',
        options: {responsive: true},
        chartData: ''
      }
    },
    computed: {
      chartDataData() {
        return this.$store.state.chartData
      }
    },
    mounted () {
      if (this.chartDataData) {
      this.showLine = true // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
      const pieData = {
        labels: ['G', 'C', 'P', 'R'],
        datasets: [
          {
            label: 'Report',
            backgroundColor: ['#f87979', '#49ff1e', '#3444dd', '#fff236'],
            data: [this.chartDataData.g, this.chartDataData.c, this.chartDataData.p, this.chartDataData.r]
          }
        ]
      }
      const options = {} // some options
      this.pieData = pieData
      this.options = options
    }
    }
  }

</script>
