<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>

</style>

<script>
  import Nav from "../components/Nav";
  import SideBar from "../components/SideBar";
  export default {
    components: {SideBar, Nav},
    head () {
      return {
        script: [
          { src: "/bundles/libscripts.bundle.js", body: true},
          { src: "/bundles/vendorscripts.bundle.js", body: true },
          { src: "/bundles/mainscripts.bundle.js", body: true }
        ],
        link: [
          { rel: 'stylesheet', href: 'vendor/bootstrap/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'vendor/font-awesome/css/font-awesome.min.css' },
          { rel: 'stylesheet', href: 'vendor/animate-css/vivify.min.css' }
        ]
      }
    }
  }
</script>
