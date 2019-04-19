<template>
  <div id="main-content">
    <div class="table-responsive">
      <table class="table table-hover table-custom spacing5">
        <thead>
        <tr>
          <th style="width: 20px;">#</th>
          <th>درخواست ها</th>
          <th style="width: 50px;">نقش</th>
          <th style="width: 110px;">وضعیت تایید</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <span>01</span>
          </td>
          <td>
            <div class="d-flex align-items-center">
              <div class="ml-3">
                <a href="page-invoices-detail.html" title="">عرفانه محمودزاده</a>
                <p class="mb-0">er.mahmoudzadeh@gmail.com</p>
              </div>
            </div>
          </td>

          <td><span class="badge badge-success ml-0 mr-0">کارمند</span></td>
          <td>
            <button type="button" class="btn btn-sm btn-default" title="تایید" data-toggle="tooltip" data-placement="top"><i class="fa  fa-check"></i></button>
            <button type="button" class="btn btn-sm btn-default " title="حذف" data-toggle="tooltip" data-placement="top"><i class="fa  fa-times"></i></button>

          </td>
        </tr>
        <tr>
          <td>
            <span>02</span>
          </td>
          <td>
            <div class="d-flex align-items-center">
              <div class="ml-3">
                <a href="page-invoices-detail.html" title="">مرتضی حسینی</a>
                <p class="mb-0">mortezahosseini@gmail.com</p>
              </div>
            </div>
          </td>

          <td><span class="badge badge-warning  ml-0 mr-0">استاد</span></td>
          <td>
            <button type="button" class="btn btn-sm btn-default" title="تایید" data-toggle="tooltip" data-placement="top"><i class="fa  fa-check"></i></button>
            <button type="button" class="btn btn-sm btn-default " title="حذف" data-toggle="tooltip" data-placement="top"><i class="fa  fa-times"></i></button>

          </td>
        </tr>


        </tbody>
      </table>
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
          { src: "/bundles/mainscripts.bundle.js", body: true },
          { src: "/js/pages/tables/table-filter.js", body: true }
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
<!--<script src="assets/js/pages/tables/table-filter.js"></script>-->
<style scoped>

</style>
