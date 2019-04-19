<template>

  <section class="container">
    <div>
      <Nav/>
    </div>
    <div>
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
import Nav from "../components/Nav";

export default {
  components: {
    Nav,
    sideBar,
    NewCase,
  }}
</script>

<style>
</style>

