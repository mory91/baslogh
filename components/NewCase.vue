<template>
    <div class="col-md-10">
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




          <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="card">
                <div class="body">
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
                </div>
              </div>
            </div>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label style="margin: 10px">
                <i class="fa fa-cloud-upload"></i>   انتخاب فایل
                <input type="file" class="form-control"  aria-label="Username" aria-describedby="basic-addon1">
              </label>
            </div>
            <input type="text" class="form-control" placeholder="آدرس فایل" aria-label="Username"
                   aria-describedby="basic-addon1">


          </div>
          <button type="button" class="btn btn-primary btn-round">Submit</button>

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
          {src: "/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js", body: true},
          {src: "/vendor/ckeditor/ckeditor.js", body: true},
          {src: "/bundles/advanced-form-elements.js", body: true},
          {src: "/bundles/editors.js", body: true}
        ],
        link: [
          {rel: 'stylesheet', href: '/vendor/dropify/css/dropify.min.css'},

        ]
      }
    },
  }
</script>
