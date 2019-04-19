<template>
  <div class="auth_brand">
    <a href="javascript:void(0);">
      <img src="~assets/images/icon.svg" width="60" height="60" class="d-inline-block align-top" alt="">
      <p style="margin: 5px; size: ">سامانه نظرات دانشگاه شهید بهشتی</p>
    </a>
  </div>
</template>

<script>
    export default {
      name: "logo",
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
      },
    }
</script>

<style scoped>

</style>
