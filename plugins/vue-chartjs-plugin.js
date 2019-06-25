import Vue from 'vue'
import { Pie } from 'vue-chartjs'

Vue.component('my-chart', {
  extends: Pie,
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    chartData () {
      this.renderChart(this.chartData, this.options);
    }
  }
})
