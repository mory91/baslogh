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
                <a href="#" title="">عرفانه محمودزاده</a>
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
                <a href="#" title="">عرفانه محمودزاده</a>
                <p class="mb-0">er.mahmoudzadeh@gmail.com</p>
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
  }
</script>

