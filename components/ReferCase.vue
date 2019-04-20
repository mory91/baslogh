<template>
<section style="text-align: right">
  <div class="col-md-12">
    <div class="card">
      <div class="body">
      <div class="form-group">
        <label>فرستنده</label>
        <label class="form-control" rows="5" cols="30" required>عرفانه محمودزاده</label>
      </div>
      <div class="form-group">
        <label>عنوان</label>
        <label class="form-control" rows="5" cols="30" required>اضافه شدن درس های پروژه دار</label>
      </div>
      <div class="form-group">
        <label>شرح کامل</label>
        <label class="form-control" rows="5" cols="30" required>با سلام لطفا با توجه به نیاز به زمان برای انجام درس های پروژه دار به این تغییر توجه فرمایید.</label>
      </div>
        </div>
    </div>
  </div>

    <div class="col-md-12">
      <div class="card">
        <div class="body">
          <div class="form-group" onclick="showHistory()">
          <label>ارجاع های قبلی&nbsp;<i id = "show" class="fa fa-caret-square-o-down"></i></label>
            <br>
             </div>
          <div id="history" style="display: none">
          <div class="form-group">
            <label>حسن غفوری</label>
            <label class="form-control" rows="5" cols="30" required>با توجه به تکرر درخواست درخواست به دکتر شمس فرد ارجاع داده شد</label>
          </div>
          </div>
      </div>
    </div>
    </div>

  <div class="col-md-12">
    <div class="card">
      <div class="body">
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

        <div class="form-group">
          <label for="input01">وضعیت</label>
          <select class="form-control round" id ="input01">
            <option value="employee">انتخاب کنید...</option>
            <option value="employee">باز</option>
            <option value="student">بسته</option>
            <option value="professor">در حال بررسی</option>
            <option value="manager">تعویق</option>
          </select>
          <div class="form-group">
            <br>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">مقطع</label>
              </div>
              <input type="text" class="form-control" id="inputGroupSelect01">
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary btn-round">ثبت</button>

      </div>
    </div>
  </div>


  </section>
</template>

<script>
    export default {
        name: "EditCase",
        head() {
          return {
            script: [
              {src: "/bundles/advanced-form-elements.js", body: true},
              {src: "/bundles/myFunctions.js"},
              {src: "/bundles/editors.js", body: true}
            ]
          }
        },
      }
</script>

<style scoped>

</style>
