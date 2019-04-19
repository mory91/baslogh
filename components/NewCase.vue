<template>
  <div class="row clearfix">
    <div class="col-md-12">
      <div class="card">
        <div class="body">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="نام و نام خانوادگی فرستنده" aria-label="Username"
                   aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="نام و نام خانوادگی گیرنده" aria-label="Username"
                   aria-describedby="basic-addon1">
          </div>

          <div>
            <div class="input-group mb-3">
              <input data-provide="datepicker" data-date-autoclose="true" class="form-control"
                     data-date-format="dd/mm/yyyy" placeholder="انتخاب زمان">
            </div>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">موضوع</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>انتخاب کنید...</option>
              <option value="1">شکایت</option>
              <option value="2">انتقاد</option>
              <option value="3">پیشنهاد</option>
              <option value="3">درخواست</option>
            </select>
          </div>



              <div class="card">
                <div class="body">
                  <div class="summernote">
                    Hi there,
                    <br/><br/>
                    <p>The toolbar can be customized and it also supports various callbacks such as <code>oninit</code>, <code>onfocus</code>, <code>onpaste</code> and many more.</p>
                    <p><strong>Note:</strong> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                    <br/><br/>
                    <p>Thank you!</p>
                    <h6>Summer Note</h6>
                  </div>
                </div>
              </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewCase",
    head() {
      return {
        script: [
          {src: "/bundles/libscripts.bundle.js", body: true},
          {src: "/bundles/vendorscripts.bundle.js", body: true},
          {src: "/bundles/mainscripts.bundle.js", body: true},
          {src: "/vendor/summernote/dist/summernote.js", body: true},
          {src: "/vendor/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js", body: true}
        ],
        link: [
          {rel: 'stylesheet', href: 'vendor/bootstrap/css/bootstrap.min.css'},
          {rel: 'stylesheet', href: 'vendor/font-awesome/css/font-awesome.min.css'},
          {rel: 'stylesheet', href: 'vendor/summernote/dist/summernote.css'},
          {rel: 'stylesheet', href: 'vendor/animate-css/vivify.min.css'}
        ]
      }
    },
  }
</script>

<!--<script src="../assets/vendor/summernote/dist/summernote.js"></script>-->
<!--<link rel="stylesheet" href="../assets/vendor/summernote/dist/summernote.css"/>-->
<style scoped>

</style>
