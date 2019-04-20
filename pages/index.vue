<template>
<div id="main-content">
<div >
  <div class="main">
    <div class="col-lg-12 col-md-12">
      <div class="card">
        <div class="header">
          <h2 >لیست موارد ثبت شده در یک سال اخیر</h2>
          <ul class="header-dropdown dropdown">

            <li><a href="javascript:void(0);" class="full-screen"><i class="icon-frame"></i></a></li>
            <li class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
              <ul class="dropdown-menu">
                <li><a href="javascript:void(0);">Action</a></li>
                <li><a href="javascript:void(0);">Another Action</a></li>
                <li><a href="javascript:void(0);">Something else</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="body">
          <div id="bar-chart" class="ct-chart"></div>
        </div>
      </div>
    </div>
  </div>

</div>
  <div class="input-group p-20 float-right w50p">


  </div>
  <Request/>
</div>
</template>

<script>
import Request from "../components/Request";
export default {
  components: {Request},
  head () {
    return {
      script: [
        { src: "/bundles/chartist.bundle.js", body: true },
        { src: "/bundles/chartjs.js", body: true }
      ],
      link: [
        { rel: 'stylesheet', href: 'vendor/chartist/css/chartist.min.css' },
        { rel: 'stylesheet', href: 'vendor/chartist-plugin-tooltip/chartist-plugin-tooltip.css' },
      ]
    }
  }
}
</script>

<style scoped>
  .baslogh {
    padding: 0.5rem;
    text-align: center;
    margin-top: 5rem;
    direction: rtl;
    font-size: 4rem;
    background: rgba(6, 17, 29, 0.84);
  }
  .under {
    text-align: right;
    margin-top: 2rem;
    direction: rtl;
    font-size: 2rem;
  }
</style>

