<template>
  <section class="container">
    <div style="border-left: lightskyblue">
      <sideBar/>
    </div>
    <div>
      <NewCase/>
    </div>

  </section>
</template>
<script>

  import sideBar from '~/components/SideBar.vue'
  import NewCase from '~/components/NewCase.vue'

  export default {
    components: {
      sideBar,
      NewCase
    }
  }
</script>
