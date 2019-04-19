<template>
<div id="main-content" dir="rtl">
  <div class="row clearfix">
    <div class="col-md-10">
      <div class="card">
        <div class="body">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="نام و نام خانوادگی" aria-label="Username"
                   aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-hashtag"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="شماره دانشجویی" aria-label="Username"
                   aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-at"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="ایمیل" aria-label="Username"
                   aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-key"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="پسوورد" aria-label="Username"
                   aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-key"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="تکرار پسوورد" aria-label="Username"
                   aria-describedby="basic-addon1">
          </div>
          <div>
            <div class="input-group mb-3">
              <input data-provide="datepicker" data-date-autoclose="true" class="form-control"
                     data-date-format="dd/mm/yyyy" placeholder="تاریح تولد">
            </div>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">دانشجو</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>مقطع</option>
              <option value="1">کارشناسی</option>
              <option value="2">کارشناسی ارشد</option>
              <option value="3">دکتری</option>
            </select>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label style="margin: 10px">
                <i class="fa fa-cloud-upload"></i>   عکس
                <input type="file" class="form-control"  aria-label="Username" aria-describedby="basic-addon1">
              </label>
            </div>
            <input type="text" class="form-control" placeholder="آدرس فایل" aria-label="Username"
                   aria-describedby="basic-addon1">


          </div>
          <button type="button" class="btn btn-primary btn-round">ذخیره</button>
        </div>
        </div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
  }
</script>
