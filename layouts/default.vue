<template>
  <section class="container">
    <div>
      <Nav/>
    </div>
    <div>
      <SideBar/>
    </div>

  </section>
</template>

<style>

</style>

<script>
  import Nav from "../components/Nav";
  import SideBar from "../components/SideBar";
  export default {
    components: {SideBar, Nav},

  }
</script>
