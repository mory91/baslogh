<template>
  <div>
    <SideBar />
    <Nav />
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<script>
  import Nav from "../components/Nav";
  import SideBar from "../components/SideBar";
  export default {
    components: {SideBar, Nav},
    head() {
      return {
        script: [
          {src: "/bundles/libscripts.bundle.js", body: true},
          {src: "/bundles/vendorscripts.bundle.js", body: true},
          {src: "/bundles/mainscripts.bundle.js", body: true}
        ],
        link: [
          {rel: 'stylesheet', href: 'vendor/bootstrap/css/bootstrap.min.css'},
          {rel: 'stylesheet', href: 'vendor/font-awesome/css/font-awesome.min.css'},
          {rel: 'stylesheet', href: '/vendor/dropify/css/dropify.min.css'},
          {rel: 'stylesheet', href: 'vendor/animate-css/vivify.min.css'}

        ]
      }
    },
  }
</script>
