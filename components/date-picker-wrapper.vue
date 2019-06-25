<template>
    <no-ssr>
      <date-picker lang='en' v-model="time1" @change="update"></date-picker>
    </no-ssr>
</template>

<script>
  export default {
    name:"date-picker-wrapper",
    props: ['filter_name'],
    data() {
      return {
        time1: ''
      }
    },
    methods: {
      async update() {
        let filter_name = this.filter_name
        let t = this.time1
        let data = {}
        data[filter_name] = t
        await this.$store.dispatch('filter_cases', data)
      }
    }
  }
</script>
