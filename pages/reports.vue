<template>
  <div id="main-content">
  <div class="container-fluid">
    <div class="row clearfix">
  <div class="w100p">
    <h1 class="float-right p-25">
      گزارشات
    </h1>
  </div>
  <div class="col-lg-12 col-md-12">
    <div class="card">
      <div class="header">
        <h2>Bar Chart</h2>
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
  <div class="col-lg-4 col-md-12">
    <div class="card">
      <div class="header">
        <h2>Simple Pie Chart</h2>
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
        <div id="pie-chart" class="ct-chart"></div>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-12">
    <div class="card">
      <div class="header">
        <h2>Donut Chart</h2>
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
        <div id="donut-chart" class="ct-chart"></div>
      </div>
    </div>
  </div>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
    head () {
      return {
        script: [
          { src: "/bundles/libscripts.bundle.js", body: true},
          { src: "/bundles/vendorscripts.bundle.js", body: true },
          { src: "/bundles/chartist.bundle.js", body: true },
          { src: "/bundles/chartjs.js", body: true },
          { src: "/bundles/mainscripts.bundle.js", body: true }
        ],
        link: [
          { rel: 'stylesheet', href: 'vendor/bootstrap/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'vendor/font-awesome/css/font-awesome.min.css' },
          { rel: 'stylesheet', href: 'vendor/chartist/css/chartist.min.css' },
          { rel: 'stylesheet', href: 'vendor/chartist-plugin-tooltip/chartist-plugin-tooltip.css' },
          { rel: 'stylesheet', href: 'vendor/animate-css/vivify.min.css' }
        ]
      }
    }
  }
</script>
