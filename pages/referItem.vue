<template>
  <div id="main-content" dir="rtl">
      <!--<ReferCase/>-->
    <section style="text-align: right">
      <div class="col-md-12">
        <div class="card">
          <div class="body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-user"></i></span>
              </div>
              <input v-model="author.id"  type="text" class="form-control" placeholder="ایمیل فرستنده" aria-label="Username"
                     aria-describedby="basic-addon1" readonly>
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
            <div class="form-group" >
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
      </div>

      <div class="col-md-12">
        <div class="card">
          <div class="body">
            <div class="row clearfix">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="card">
                  <textarea  v-model="case_content" placeholder="متن پاسخ..." class="form-control content-area">
                  </textarea>
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
  </div>
</template>
<script>
  import ReferCase from '~/components/ReferCase.vue'
  import SideBar from "../components/SideBar";

  export default {
    components: {
      SideBar,
      ReferCase,
    },
    head () {
      return {
        script: [
          { src: "/bundles/libscripts.bundle.js", body: true},
          { src: "/bundles/vendorscripts.bundle.js", body: true },
          {src: "/bundles/myFunctions.js"},
          { src: "/bundles/mainscripts.bundle.js", body: true }
        ],
        link: [
          { rel: 'stylesheet', href: 'vendor/bootstrap/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'vendor/font-awesome/css/font-awesome.min.css' },
          { rel: 'stylesheet', href: 'vendor/animate-css/vivify.min.css' }
        ]
      }
    },
    data(){
      return{
        // author : this.$store.state.authUser.email,
        author : {id:this.$store.state.authUser.email },
        receiver:'',
        submitDate:'',
        subject:'',
        title:'',
        case_content:'',
        error:null
      }
    },

    methods:{
      async submitCase(){
        try {
          await this.$store.dispatch('submitCase', {
            author: {id:this.$store.state.authUser.email },
            receiver: this.receiver,
            submitDate: this.submitDate,
            subject: this.subject,
            title: this.title,
            text: this.case_content
          })
          this.receiver= '',
            this.submitDate= '',
            this.subject='',
            this.title='',
            this.text= '',
            this.case_content =''
          this.error = null
          this.$router.push('/')
        }
        catch (e) {

        }
      }
    }
  }

</script>
