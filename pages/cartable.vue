<template>
  <div id="main-content">
    <div class="block-header">
      <div class="row clearfix">

        <div class="col-md-6 col-sm-12 text-right hidden-xs">
          <n-link to="/newitem" class="btn btn-sm btn-primary btn-round float-left" title="">جدید</n-link>
        </div>
        <div class="col-md-6 col-sm-12">
          <h2 class="float-right">لیست کار ها</h2>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row clearfix">
        <div class="col-lg-12">
          <div class="table-responsive">
            <table dir="rtl" class="table table-hover table-custom spacing5 text-right">
              <tbody>
              <tr>
                <td class="w60">
                  <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="w35 rounded" data-original-title="Avatar Name">
                </td>
                <td>
                  <a href="javascript:void(0);" title="">مرتضی حسینی</a>
                  <p class="mb-0">94243015</p>
                </td>
                <td>
                  <span>mortezahosseini@gmail.com</span>
                </td>
                <td>
                  <span>شرح کمی از کار ...</span>
                </td>
                <td>
                  <button class="btn btn-primary btn-sm">ورود</button>
                  <button class="btn btn-success btn-sm">انجام شد</button>
                </td>
              </tr>
              <tr>
                <td class="w60">
                  <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="w35 rounded" data-original-title="Avatar Name">
                </td>
                <td>
                  <a href="javascript:void(0);" title="">مرتضی حسینی</a>
                  <p class="mb-0">94243015</p>
                </td>
                <td>
                  <span>mortezahosseini@gmail.com</span>
                </td>
                <td>
                  <span>شرح کمی از کار ...</span>
                </td>
                <td>
                  <button class="btn btn-primary btn-sm">ورود</button>
                  <button class="btn btn-success btn-sm">انجام شد</button>
                </td>
              </tr>
              <tr>
                <td class="w60">
                  <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="w35 rounded" data-original-title="Avatar Name">
                </td>
                <td>
                  <a href="javascript:void(0);" title="">مرتضی حسینی</a>
                  <p class="mb-0">94243015</p>
                </td>
                <td>
                  <span>mortezahosseini@gmail.com</span>
                </td>
                <td>
                  <span>شرح کمی از کار ...</span>
                </td>
                <td>
                  <button class="btn btn-primary btn-sm">ورود</button>
                  <button class="btn btn-success btn-sm">انجام شد</button>
                </td>
              </tr>
              <tr>
                <td class="w60">
                  <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="w35 rounded" data-original-title="Avatar Name">
                </td>
                <td>
                  <a href="javascript:void(0);" title="">مرتضی حسینی</a>
                  <p class="mb-0">94243015</p>
                </td>
                <td>
                  <span>mortezahosseini@gmail.com</span>
                </td>
                <td>
                  <span>شرح کمی از کار ...</span>
                </td>
                <td>
                  <button class="btn btn-primary btn-sm">ورود</button>
                  <button class="btn btn-success btn-sm">انجام شد</button>
                </td>
              </tr>
              <tr>
                <td class="w60">
                  <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="w35 rounded" data-original-title="Avatar Name">
                </td>
                <td>
                  <a href="javascript:void(0);" title="">مرتضی حسینی</a>
                  <p class="mb-0">94243015</p>
                </td>
                <td>
                  <span>mortezahosseini@gmail.com</span>
                </td>
                <td>
                  <span>شرح کمی از کار ...</span>
                </td>
                <td>
                  <button class="btn btn-primary btn-sm">ورود</button>
                  <button class="btn btn-success btn-sm">انجام شد</button>
                </td>
              </tr>
              </tbody>
            </table>
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
