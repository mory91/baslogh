<template>
  <div id="main-content">
    <div class="input-group p-20 float-right w50p">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">جست و جو</button>
      </div>
      <input dir="rtl" type="text" class="form-control" placeholder="محتوا" aria-label="Recipient's username" aria-describedby="basic-addon2">

    </div>
    <div class="table-responsive" dir="rtl">
      <table dir="rtl" class="table table-hover table-custom spacing5 text-right">
        <thead>
        <tr>
          <th style="width: 20px;">#</th>
          <th>مسوول</th>
          <th>کاربر فرستنده</th>
          <th>کاربر مسئول</th>
          <th style="width: 50px;">زمان</th>
          <th style="width: 50px;">وضعیت</th>
          <th style="width: 110px;">رضایت</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <span>01</span>
          </td>
          <td>
            <div class="d-flex align-items-center">
              <div class="avtar-pic w35 bg-red" data-toggle="tooltip" data-placement="top" title="Avatar Name"><span>SS</span></div>
              <div class="mr-3">
                <a href="page-invoices-detail.html" title="">غفوری</a>
                <p class="mb-0">ghafouri@sbu.ac.ir</p>
              </div>
            </div>
          </td>
          <td>مرتضی حسینی</td>
          <td>حسن غفوری</td>
          <td>۲۲ آبان</td>
          <td><span class="badge badge-success ml-0 mr-0">Done</span></td>
          <td>
            <button type="button" class="btn btn-sm btn-default " title="Like" data-toggle="tooltip" data-placement="top"><i class="icon-like"></i></button>
            <button type="button" class="btn btn-sm btn-default" title="Dislike" data-toggle="tooltip" data-placement="top"><i class="icon-dislike"></i></button>
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
