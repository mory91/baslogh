<template>
  <div id="main-content">
    <div class="container-fluid">
      <div class="row clearfix">
        <div class="w100p">
          <h1 class="float-right p-25">
            گزارشات
          </h1>
        </div>
        <div class="float-right">
          <label class="input-group">از</label>
          <date-picker-wrapper :filter_name="from_name"></date-picker-wrapper>
          <label class="input-group">تا</label>
          <date-picker-wrapper :filter_name="to_name"></date-picker-wrapper>
          <button type="submit" @click="update" class="btn btn-primary btn-round btn-block">جستجو</button>
        </div>
        <div class="col-lg-12 col-md-12">
          <my-chart :chartData="pieData" :options="options"></my-chart>
        </div>
      </div>
    </div>
  </div>

</template>
<script>

  import DatePickerWrapper from "../components/date-picker-wrapper";
  export default {
    components: {DatePickerWrapper},
    data() {
      return {
        from_q: '',
        to_q: '',
        from_name: 'from',
        to_name: 'to',
        pieData: ''
      }
    },
    methods: {
      async update() {
        let cData = await this.$axios.post("http://localhost:8080/api/v1/case/filter", {...this.$store.state.filters})
        cData = cData.data
        console.log(cData)
        const z = {
          labels: ['G', 'C', 'P', 'R'],
          datasets: [
            {
              label: 'Report',
              backgroundColor: ['#f87979', '#49ff1e', '#3444dd', '#fff236'],
              data: [cData.grievance, cData.criticism, cData.proposal, cData.request]
            }
          ]
        }
        const options = {} // some options
        this.pieData = z
        this.options = options
      }
    }

  }
</script>
