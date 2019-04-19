<template>
<div id="main-content" dir="rtl">
  <div class="card col-md-10 " style="position: center;text-align: right; margin-left: 40%; background-color: #393d42;">
    <div class="profile-header d-flex  ">
      <div class="d-flex">
        <div class="mr-3" style="margin-left: 20px">
          <img src="../assets/images/user.png" height="90%" class="rounded" style="margin-top: 5%" alt="">
        </div>
        <div class="details" style="margin-top: 20px">
          <h5 class="mb-0">مرتضی حسینی</h5>
          <span class="text-light">دانشجو</span>
          <p class="mb-0"><span> موارد ثبت شده:<strong>5</strong></span></p>
          <div style="text-align: left">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label style="color: cadetblue; margin-top: 20px">
                  <i class="fa fa-cloud-upload"></i>   تعویض عکس
                  <input type="file" class="form-control"  aria-label="Username" aria-describedby="basic-addon1">
                </label>
              </div>



            </div>
          </div>
        </div>


      </div>

    </div>
  </div>

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


              <div class="row clearfix">

                <div class="col-lg-4 col-md-12">
                  <div class="form-group">
                    <select class="form-control">
                      <option value="">-- انتخاب جنسیت --</option>
                      <option value="AF">مرد</option>
                      <option value="AX">زن</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="icon-calendar"></i></span>
                      </div>
                      <input data-provide="datepicker" data-date-autoclose="true" class="form-control" placeholder="تاریخ تولد">
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-12">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="شهر">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <textarea rows="4" type="text" class="form-control" placeholder="آدرس"></textarea>
                  </div>
                </div>
              </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">مقطع</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>انتخاب کنید...</option>
              <option value="1">کارشناسی</option>
              <option value="2">کارشناسی ارشد</option>
              <option value="3">دکتری</option>
            </select>
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
