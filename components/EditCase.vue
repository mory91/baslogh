<template>
  <div class="col-md-10">
    <div class="card">
      <div class="body">
        <div class="form-group">
          <label class="form-control" style="border: none; ">عنوان</label>
          <label class="form-control" rows="5" cols="30" required>زمان پروژه ها</label>
          <label class="form-control" style="border: none; ">ثبت کننده</label>
          <label class="form-control" rows="5" cols="30" required>عرفانه محمودزاده</label>
          <label class="form-control" style="border: none; ">شرح کامل</label>
          <label class="form-control" rows="5" cols="30" required>با سلام لطفا با توجه به محدودیت زمان در طول ترم برای پروژه ها بعد از امتحانات زمانی در نظر بگیرید</label>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="body" onclick="showHistory()">
        <label class="form-control" style="border: none;">توضیحات ارجاعات قبلی&nbsp; <i
          class="fa fa-caret-square-o-down" id="show"></i></label>
      </div>
    </div>
    <div class="card" id="history" style="display: none">
      <div class="body">
        <div class="form-group">
          <label class="form-control" style="border: none; ">ثبت کننده</label>
          <label class="form-control" rows="5" cols="30" required>آقای غفوری</label>
          <label class="form-control" style="border: none; ">شرح کامل</label>
          <label class="form-control" rows="5" cols="30" required>با توجه به درخواست دانشجوبان درخواست به دکتر شمس فرد ارحاع داده شد.</label>

        </div>
      </div>
    </div>

    <div class="row clearfix">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="card">
          <div class="body">

            <br>
            <textarea id="ckeditor">
                      <h2>WYSIWYG Editor</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper sapien non nisl facilisis bibendum in quis tellus. Duis in urna bibendum turpis pretium fringilla. Aenean neque velit, porta eget mattis ac, imperdiet quis nisi. Donec non dui et tortor vulputate luctus. Praesent consequat rhoncus velit, ut molestie arcu venenatis sodales.</p>
                      <h3>Lacinia</h3>
                      <ul>
                          <li>Suspendisse tincidunt urna ut velit ullamcorper fermentum.</li>
                          <li>Nullam mattis sodales lacus, in gravida sem auctor at.</li>
                          <li>Praesent non lacinia mi.</li>
                          <li>Mauris a ante neque.</li>
                          <li>Aenean ut magna lobortis nunc feugiat sagittis.</li>
                      </ul>
                      <h3>Pellentesque adipiscing</h3>
                      <p>Maecenas quis ante ante. Nunc adipiscing rhoncus rutrum. Pellentesque adipiscing urna mi, ut tempus lacus ultrices ac. Pellentesque sodales, libero et mollis interdum, dui odio vestibulum dolor, eu pellentesque nisl nibh quis nunc. Sed porttitor leo adipiscing venenatis vehicula. Aenean quis viverra enim. Praesent porttitor ut ipsum id ornare.</p>
                  </textarea>
            <br>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-user"></i></span>
              </div>

              <input type="text" class="form-control" placeholder="نام و نام خانوادگی گیرنده" aria-label="Username"
                     aria-describedby="basic-addon1" id="input02">
            </div>
            <br>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">وضعیت</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>انتخاب کنید...</option>
                <option value="1">باز</option>
                <option value="2">بسته</option>
                <option value="3">در حال بررسی</option>
                <option value="3">تعویق</option>
              </select>
            </div>
            <br>

            <button type="button" class="btn btn-primary btn-round">ثبت</button>


          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

  export default {
    name: "EditCase",
    head() {
      return {
        script: [
          {src: "/bundles/libscripts.bundle.js", body: true},
          {src: "/bundles/vendorscripts.bundle.js", body: true},
          {src: "/bundles/mainscripts.bundle.js", body: true},
          {src: "/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js", body: true},
          {src: "/vendor/ckeditor/ckeditor.js", body: true},
          {src: "/bundles/advanced-form-elements.js", body: true},
          {src: "/bundles/editors.js", body: true},
          {src: "/myFunctions.js"}
        ],
        link: [
          {rel: 'stylesheet', href: 'vendor/bootstrap/css/bootstrap.min.css'},
          {rel: 'stylesheet', href: 'vendor/font-awesome/css/font-awesome.min.css'},
          {rel: 'stylesheet', href: '/vendor/dropify/css/dropify.min.css'},
          {rel: 'stylesheet', href: 'vendor/animate-css/vivify.min.css'}

        ]
      }
    },

  };


</script>

<style scoped>


</style>
