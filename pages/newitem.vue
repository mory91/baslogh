<template>
  <div id="main-content" dir="rtl">
    <div style="margin-left: 40px">
      <SideBar/>
    </div>
    <div class="row clearfix">
      <NewCase />
    </div>
  </div>
</template>
<script>
  import NewCase from '~/components/NewCase.vue'
  import SideBar from "../components/SideBar";

  export default {
    components: {
      SideBar,
      NewCase,
    },
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
