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
    }
  }
</script>
